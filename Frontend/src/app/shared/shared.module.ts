import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_MESSAGE_CONFIG, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
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
import { SurveyAnalyticsComponent } from './components/survey-analytics/survey-analytics.component';
import { MapComponent } from './components/map/map.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { CollectorOptionsComponent } from './components/collector-options/collector-options.component';
import { ContactDetailsComponent } from './modals/contact-details/contact-details.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { SvgContainerComponent } from './components/svg-container/svg-container.component';
import { SvgService } from './components/svg-container/svg.service';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SendSurveyComponent } from './modals/send-survey/send-survey.component';

const COMPONENTS = [
  SvgContainerComponent,
  SvgIconComponent,
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
  SurveyResponseComponent,
  SurveyAnalyticsComponent,
  MapComponent,
  MarkdownEditorComponent,
  CollectorOptionsComponent,
  ContactDetailsComponent,
  ImageCropperComponent,
  SendSurveyComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    PerfectScrollbarModule,
    TranslateModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: (): MarkedOptions => {
          return {
            renderer: new MarkedRenderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
          };
        }
      }
    }),
  ],
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
  declarations: [...COMPONENTS, SummaryPipe],
  providers: [
    { provide: NZ_MESSAGE_CONFIG, useValue: { nzMaxStack: 1 }},
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzMaxStack: 1 }}
  ],
  entryComponents: [
    ManageFoldersComponent,
    ManageProfileComponent,
    ModalCreateSurveyComponent,
    PreviewCopyComponent,
    RenameCollectorComponent,
    CloseCollectorComponent,
    OpenCollectorComponent,
    ContactDetailsComponent,
    SendSurveyComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SvgService
      ]
    }
  }
}
