import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
declare const EXIF: any;

type CropperState = { width: number; height: number; x: number; y: number };

@Component({
  selector: "image-cropper",
  templateUrl: "image-cropper.component.html",
  styleUrls: ["image-cropper.component.scss"]
})
export class ImageCropperComponent implements OnChanges {
  @Input() src = "";
  @Input() targetWidth = 500;
  @Input() targetHeight = 500;
  @Input() imageFormat = "jpeg";
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("punchEl", { static: true }) punchEl: ElementRef;
  @ViewChild("moveEl", { static: false }) moveEl: ElementRef;
  @ViewChild("resizeEl", { static: false }) resizeEl: ElementRef;
  @ViewChild("originalImageEl", { static: false }) originalImageEl: ElementRef;

  orientedSrc = "";

  private touch: boolean;

  private cropperState: CropperState = {
    width: null,
    height: null,
    x: null,
    y: null
  };

  private dragState: {
    initialX: number;
    initialY: number;
    deltaX: number;
    deltaY: number;
  };

  private resizeState: {
    centerX: number;
    centerY: number;
  };

  private originalElementScaledWidth: number;
  private originalElementScaledHeight: number;

  private onmousemove = (event: MouseEvent) => {
    this.moveDuring(event);
  };
  private onmouseup = (event: MouseEvent) => {
    this.moveEnd(event);
  };
  private onresizemove = (event: MouseEvent) => {
    this.resizeDuring(event);
  };
  private onresizeend = (event: MouseEvent) => {
    this.resizeEnd(event);
  };

  ngOnChanges() {
    (<HTMLElement>this.punchEl.nativeElement).style.visibility = "hidden";

    if (this.src) {
      const canvas = document.createElement("canvas");
      const ctx = <any>canvas.getContext("2d");
      const image = new Image();
      image.src = this.src;
      const exif = EXIF.readFromBinaryFile(this.base64ToArrayBuffer(this.src));

      image.onload = () => {
        if ([6, 8].indexOf(exif.Orientation) === -1) {
          canvas.width = image.width;
          canvas.height = image.height;
        } else {
          canvas.width = image.height;
          canvas.height = image.width;
        }
        this.orientContextAccondingToImageOrientation(exif, canvas, ctx);

        ctx.drawImage(image, 0, 0);
        this.orientedSrc = canvas.toDataURL("image/" + this.imageFormat);
        this.init();
      };
      image.onerror = e => {
        this.onError.emit({
          event: e,
          fileType: this.src.substring(
            "data:".length,
            this.src.indexOf(";base64")
          )
        });
        console.error("Failed to load image", e);
      };
    }
  }

  init() {
    const image = <HTMLImageElement>this.originalImageEl.nativeElement;
    image.onload = () => {
      const radius = image.width / 4;
      this.cropperState.width = radius * 2;
      this.cropperState.height = radius * 2;
      this.cropperState.x = image.width / 2 - radius;
      this.cropperState.y = image.height / 2 - radius;
      this.redrawCropper();

      this.originalElementScaledWidth = image.width;
      this.originalElementScaledHeight = image.height;
    };
  }

  redrawCropper() {
    this.setHolePosition();
    this.setMovePosition();
    this.setResizePosition();
  }

  crop(): Promise<string> {
    const canvas = document.createElement("canvas");
    const ctx = <any>canvas.getContext("2d");
    canvas.width = this.targetWidth;
    canvas.height = this.targetHeight;

    const image = new Image();
    image.src = this.orientedSrc;

    return new Promise((resolve, reject) => {
      image.onload = () => {
        const scaleFactor = image.width / this.originalElementScaledWidth;
        const scaleFactorCheck =
          image.height / this.originalElementScaledHeight;
        ctx.drawImage(
          image,
          this.cropperState.x * scaleFactor,
          this.cropperState.y * scaleFactor,
          this.cropperState.width * scaleFactor,
          this.cropperState.height * scaleFactor,
          0,
          0,
          this.targetWidth,
          this.targetHeight
        );
        resolve(canvas.toDataURL("image/" + this.imageFormat));
      };
      image.onerror = e => reject(e);
    });
  }

  private setHolePosition() {
    const hole = <HTMLDivElement>this.punchEl.nativeElement;
    hole.setAttribute(
      "style",
      "top:" +
        this.cropperState.y +
        "px;" +
        "left:" +
        this.cropperState.x +
        "px;" +
        "width:" +
        this.cropperState.width +
        "px;" +
        "height:" +
        this.cropperState.height +
        "px;"
    );
  }

  private setMovePosition() {
    const move = <HTMLDivElement>this.moveEl.nativeElement;
    this.placeCircleOnCropCircle(move, (-3 * Math.PI) / 4, 5.6);
  }

  private setResizePosition() {
    const resize = <HTMLDivElement>this.resizeEl.nativeElement;
    this.placeCircleOnCropCircle(resize, Math.PI / 4, 11.3);
  }

  private placeCircleOnCropCircle(
    el: HTMLDivElement,
    angle: number,
    offset?: number
  ) {
    const holeRadius = this.cropperState.width / 2;
    const elRadius = el.offsetWidth / 2;
    const x = holeRadius + Math.cos(angle) * holeRadius - elRadius - offset;
    const y = holeRadius + Math.sin(angle) * holeRadius - elRadius - offset;
    el.setAttribute("style", "top:" + y + "px;" + "left:" + x + "px;");
  }

  moveStart(event: MouseEvent | TouchEvent, touch: boolean) {
    event.preventDefault();

    const clientXY = this.getClientXY(event);

    this.dragState = {
      initialX: this.cropperState.x,
      initialY: this.cropperState.y,
      deltaX: clientXY[0],
      deltaY: clientXY[1]
    };

    this.touch = touch;
    if (touch) {
      document.body.addEventListener("touchmove", this.onmousemove, false);
      document.body.addEventListener("touchend", this.onmouseup, false);
    } else {
      document.body.addEventListener("mousemove", this.onmousemove, false);
      document.body.addEventListener("mouseup", this.onmouseup, false);
    }
  }

  moveDuring(event: MouseEvent | TouchEvent) {
    if ((<TouchEvent>event).touches && (<TouchEvent>event).touches.length > 1) {
      return;
    }
    const clientXY = this.getClientXY(event);

    const deltaX = clientXY[0] - this.dragState.deltaX;
    const deltaY = clientXY[1] - this.dragState.deltaY;

    this.cropperState.y = this.dragState.initialY + deltaY;
    this.cropperState.x = this.dragState.initialX + deltaX;

    if (this.cropperState.y < 0) {
      this.cropperState.y = 0;
    } else if (
      this.cropperState.y + this.cropperState.height >
      this.originalElementScaledHeight
    ) {
      this.cropperState.y =
        this.originalElementScaledHeight - this.cropperState.height;
    }
    if (this.cropperState.x < 0) {
      this.cropperState.x = 0;
    } else if (
      this.cropperState.x + this.cropperState.width >
      this.originalElementScaledWidth
    ) {
      this.cropperState.x =
        this.originalElementScaledWidth - this.cropperState.width;
    }

    this.redrawCropper();

    event.preventDefault();
  }

  moveEnd(event: MouseEvent) {
    event.preventDefault();
    this.dragState = null;
    if (this.touch) {
      document.body.removeEventListener("touchmove", this.onmousemove, false);
      document.body.removeEventListener("touchend", this.onmouseup, false);
    } else {
      document.body.removeEventListener("mousemove", this.onmousemove, false);
      document.body.removeEventListener("mouseup", this.onmouseup, false);
    }
  }

  resizeStart(event: MouseEvent, touch: boolean) {
    event.preventDefault();
    this.resizeState = {
      centerX: this.cropperState.x + this.cropperState.width / 2,
      centerY: this.cropperState.y + this.cropperState.height / 2
    };
    this.touch = touch;
    if (touch) {
      document.body.addEventListener("touchmove", this.onresizemove, false);
      document.body.addEventListener("touchend", this.onresizeend, false);
    } else {
      document.body.addEventListener("mousemove", this.onresizemove, false);
      document.body.addEventListener("mouseup", this.onresizeend, false);
    }
  }

  resizeDuring(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    if ((<TouchEvent>event).touches && (<TouchEvent>event).touches.length > 1) {
      return;
    }
    const bb = this.punchEl.nativeElement.getBoundingClientRect();

    const clientXY = this.getClientXY(event);

    const deltaX = clientXY[0] - bb.left - this.cropperState.width / 2;
    const deltaY = clientXY[1] - bb.top - this.cropperState.height / 2;
    const radius = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    const tmpWidth = radius * 2;
    const tmpHeight = radius * 2;
    const tmpX = this.resizeState.centerX - radius;
    const tmpY = this.resizeState.centerY - radius;

    if (
      tmpY < 0 ||
      tmpX < 0 ||
      tmpY + tmpHeight > this.originalElementScaledHeight ||
      tmpX + tmpWidth > this.originalElementScaledWidth
    ) {
      return;
    }

    this.cropperState.width = tmpWidth;
    this.cropperState.height = tmpHeight;
    this.cropperState.y = tmpY;
    this.cropperState.x = tmpX;

    this.redrawCropper();
  }

  resizeEnd(event: MouseEvent) {
    this.resizeState = null;
    event.preventDefault();
    if (this.touch) {
      document.body.removeEventListener("touchmove", this.onresizemove, false);
      document.body.removeEventListener("touchend", this.onresizeend, false);
    } else {
      document.body.removeEventListener("mousemove", this.onresizemove, false);
      document.body.removeEventListener("mouseup", this.onresizeend, false);
    }
  }

  private getClientXY(event: MouseEvent | TouchEvent) {
    let clientX;
    let clientY;
    if ((<TouchEvent>event).touches) {
      clientX = (<TouchEvent>event).touches.item(0).clientX;
      clientY = (<TouchEvent>event).touches.item(0).clientY;
    } else {
      clientX = (<MouseEvent>event).clientX;
      clientY = (<MouseEvent>event).clientY;
    }
    return [clientX, clientY];
  }

  private base64ToArrayBuffer(base64: string) {
    base64 = base64.replace(/^data\:([^\;]+)\;base64,/gim, "");
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  private orientContextAccondingToImageOrientation(exif, canvas, ctx: any) {
    switch (exif.Orientation) {
      case 3:
        // 180° rotate left
        ctx.translate(canvas.width, canvas.height);
        ctx.rotate(Math.PI);
        break;
      case 6:
        // 90° rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -canvas.width);
        break;
      case 8:
        // 90° rotate left
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-canvas.height, 0);
        break;
    }
  }
}
