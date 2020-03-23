import { Component, OnInit } from "@angular/core";
import { SurveyCollector, DSurveyCollectorService } from "@app/core";
import { LoaderService } from "@app/shared/services";
import { NzMessageService, NzModalService } from "ng-zorro-antd";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-open-collector",
  templateUrl: "./open-collector.component.html",
  styleUrls: ["./open-collector.component.scss"]
})
export class OpenCollectorComponent implements OnInit {
  surveyCollectorOpen: SurveyCollector;
  buttonLoading = false;
  constructor(
    private loaderService: LoaderService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private dSurveyCollectorService: DSurveyCollectorService,
    private modalService: NzModalService
  ) {}

  ngOnInit() {}

  onSaveSurveyCollector() {
    this.buttonLoading = true;
    this.loaderService.display(true);
    const dataUpdate = {
      status: "OPEN"
    };
    this.dSurveyCollectorService
      .updateSurveyCollector(this.surveyCollectorOpen.id, dataUpdate)
      .subscribe(
        res => {
          if (res.status.code === 200) {
            this.nzMessageService.success(
              this.translateService.instant(res.status.message)
            );
            this.surveyCollectorOpen = Object.assign(
              this.surveyCollectorOpen,
              dataUpdate
            );
            this.modalService.closeAll();
          }
        },
        err => {
          this.loaderService.display(false);
          this.buttonLoading = false;
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
          this.modalService.closeAll();
        },
        () => {
          this.loaderService.display(false);
          this.buttonLoading = false;
          this.modalService.closeAll();
        }
      );
  }
  onCancel() {
    this.modalService.closeAll();
  }
}
