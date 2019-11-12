import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';
import { SurveyCreatorComponent } from './components/survey-creator/survey-creator.component';
import { SurveyComponent } from './components/survey/survey.component';
import { PageComponent } from './components/page/page.component';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { TitleTableComponent } from './components/title-table/title-table.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { ManageFoldersComponent } from './modals/manage-folders/manage-folders.component';
import { ManageProfileComponent } from './modals/manage-profile/manage-profile.component';
import { ModalCreateSurveyComponent } from './modals/modal-create-survey/modal-create-survey.component';
import { PreviewCopyComponent } from './modals/preview-copy/preview-copy.component';
import { RenameCollectorComponent } from './modals/rename-collector/rename-collector.component';
import { CloseCollectorComponent } from './modals/close-collector/close-collector.component';
import { OpenCollectorComponent } from './modals/open-collector/open-collector.component';
import { SurveyResponseComponent } from './components/survey-response/survey-response.component';

const COMPONENTS = [
  SurveyComponent,
  SurveyCreatorComponent,
  PageComponent,
  FieldErrorDisplayComponent,
  TitleTableComponent,
  ManageFoldersComponent,
  ManageProfileComponent,
  ModalCreateSurveyComponent,
  PreviewCopyComponent,
  RenameCollectorComponent,
  CloseCollectorComponent,
  OpenCollectorComponent,
  SurveyResponseComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    PerfectScrollbarModule,
    TranslateModule
  ],
  declarations: [...COMPONENTS, SummaryPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    PerfectScrollbarModule,
    TranslateModule,
    SummaryPipe,
    ...COMPONENTS
  ],
  providers: [{ provide: NZ_MESSAGE_CONFIG, useValue: { nzMaxStack: 1 } }],
  entryComponents: [
    ManageFoldersComponent,
    ManageProfileComponent,
    ModalCreateSurveyComponent,
    PreviewCopyComponent,
    RenameCollectorComponent,
    CloseCollectorComponent,
    OpenCollectorComponent
  ]
})
export class SharedModule {}
