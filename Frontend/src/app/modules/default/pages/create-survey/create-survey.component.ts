import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { ModalCreateSurveyComponent } from '@app/shared/modals/modal-create-survey/modal-create-survey.component';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

type CreateType = 'past' | 'scratch' | 'template';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss', './styles/style.scss']
})
export class CreateSurveyComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSearchPast', { static: false }) inputSearchPast: ElementRef<any>;
  createType: CreateType = 'past';
  modalForm: NzModalRef;
  searchPastValue: string;
  searchTemplateValue: string;
  constructor(
    private modalService: NzModalService,
    private translateService: TranslateService
  ) { }

  ngOnInit() { }
  ngAfterViewInit() {
    fromEvent(this.inputSearchPast.nativeElement, 'keyup').pipe(
      debounceTime(250),
      distinctUntilChanged(),
      tap((event: KeyboardEvent) => {
        this.searchPastValue = this.inputSearchPast.nativeElement.value;
      })
    ).subscribe();
  }
  changeCreateType(type: CreateType) {
    this.createType = type;
  }
  openModalScratch() {
    this.modalForm = this.modalService.create({
      nzTitle: this.translateService.instant('default.layout.NAME_YOUR_SURVEY'),
      nzFooter: null,
      nzContent: ModalCreateSurveyComponent,
      nzCancelDisabled: true,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: 700,
      nzClassName: 'modal-create-survey-dialog'
    });
  }
  onSearchPastSurvey(value) {
    debugger;
  }
}
