import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, EventEmitter, Output, forwardRef, OnInit, ViewEncapsulation, HostListener
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EditorOption, EditorInstance, AngularMarkdownEditorComponent } from 'angular-markdown-editor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarkdownService } from 'ngx-markdown';
@Component({
  selector: 'markdown-editor',
  templateUrl: 'markdown-editor.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['markdown-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MarkdownEditorComponent),
    multi: true
  }]
})
export class MarkdownEditorComponent implements OnChanges, ControlValueAccessor, OnInit {

  @HostListener('blur') onBlur() {
    if (this.input) {
      this.input.elm.nativeElement.focus();
    }
  }
  @HostListener('document:click') onClick() {
    setTimeout(() => { }, 10);
  }
  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;
  @ViewChild('output', { static: true }) output: ElementRef;
  @ViewChild('input', { static: false }) input: AngularMarkdownEditorComponent;
  @Input() content: string;
  @Input() editable = true;
  @Input() placeholder = 'shared.ADD_TEXT';
  @Input() autoHeight: boolean = true;
  @Input() minHeight: number = 150;
  @Input() maxHeight: number = 400;
  @Input() autoHighlight: boolean = true;
  @Output() valueSubmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() focus: EventEmitter<void> = new EventEmitter<void>();
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  editMode = false;
  defaultMinHeight = 20;
  defaultMaxHeight = 150;
  private changeListener: (_: string) => {};
  private touchListener: () => void;
  bsEditorInstance: EditorInstance;
  showEditor = true;
  editorOptions: EditorOption;
  templateForm: FormGroup;
  _id: string;
  constructor(private element: ElementRef, private translateService: TranslateService, private fb: FormBuilder, private markdownService: MarkdownService) { }

  ngOnInit(): void {
    this.initEditor();
    if (!this.minHeight) {
      this.minHeight = this.defaultMinHeight;
    }

    if (!this.maxHeight) {
      this.maxHeight = this.defaultMaxHeight;
    }
    this._id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);

    this.translateService.onLangChange.subscribe((result: any) => {
      this.convert();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.content = this.content ? this.content : '';
    if (this.output) {
      this.convert();
    }
  }

  writeValue(content: string): void {
    this.content = content;
    this.templateForm.controls.body.setValue(content);
    this.convert();
  }

  registerOnChange(fn: any): void {
    this.changeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchListener = fn;
  }

  hidePreview(e): void {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  setDisabledState?(isDisabled: boolean): void { }

  enterEdit(): void {
    if (!this.editable) {
      return;
    }
    this.focus.emit();
    this.element.nativeElement.classList.add('edit-mode');
    this.editMode = true;
    setTimeout(() => {
      this.input.elm.nativeElement.focus();
      this.input.elm.nativeElement.selectionStart = 0;
      this.input.elm.nativeElement.selectionEnd = 0;
      this.adjustHeight();
    }, 1);
  }

  private adjustHeight(): void {
    setTimeout(() => {
      if (!this.input) {
        return;
      }
      // Reset field height
      this.input.elm.nativeElement.style.height = 'inherit';

      // Get the computed styles for the element
      var computed = window.getComputedStyle(this.input.elm.nativeElement);

      // Calculate the height
      var _height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + this.input.elm.nativeElement.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

      let maxHeight = this.maxHeight;
      if (this.maxHeight) {
        maxHeight = Math.min(_height, this.maxHeight);
      }
      this.input.elm.nativeElement.setAttribute('style', `height: ${Math.max(maxHeight, this.minHeight) + 'px'};`);
    })
  }

  exitEdit(): void {
    this.blur.emit();
    (<HTMLElement>this.element.nativeElement).classList.remove('edit-mode');
    if (this.touchListener) {
      this.touchListener();
    }
    this.editMode = false;
    const newContent = this.input.elm.nativeElement.value;
    if (this.content !== newContent) {
      if (this.valueSubmit) {
        this.valueSubmit.emit(newContent);
      }
      if (this.changeListener) {
        this.content = newContent;
        this.convert();
        this.changeListener(this.content);
      }
    }
  }

  private buildForm(markdownText): void {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true]
    });
  }

  private parse(inputValue: string): string {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();
    return markedOutput;
  }

  private convert(): void {
    const content = this.content;
    let placeholderContent = '';
    if (!content && this.placeholder && this.placeholder.length > 0) {
      placeholderContent = this.translateService.instant(this.placeholder);
    }
    const html = this.parse(content || placeholderContent);
    this.output.nativeElement.innerHTML = html;
  }

  private initEditor(): void {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      hiddenButtons: ["cmdPreview"],
      fullscreen: {
        enable: false,
        icons: null
      },
      height: 'vertical',
      onFullscreenExit: (e) => this.hidePreview(e),
      onShow: (e) => {
        this.bsEditorInstance = e
      },
      onBlur: (e) => this.exitEdit(),
      parser: (val) => this.parse(val)
    };

    this.buildForm(this.content);
    this.onFormChanges();
  }

  private onFormChanges(): void {
    this.templateForm.valueChanges.subscribe(formData => {
      if (formData) {
        if (this.autoHeight && this.input) {
          this.adjustHeight();
        }
      }
    });
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  private highlight() {
    if (!this.autoHeight) {
      return;
    }
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

}
