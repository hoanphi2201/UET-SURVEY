import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { DesignSurveyComponent } from './pages/design-survey/design-survey.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PreviewScoreComponent } from './pages/preview-score/preview-score.component';
import { CreateFormRouting } from './create-form.routing';
import { CollectResponsesComponent } from './pages/collect-responses/collect-responses.component';
import { CollectLinkComponent } from './pages/collect-link/collect-link.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AnalyzeResultsComponent } from './pages/analyze-results/analyze-results.component';

const COMPONENTS = [
  DesignSurveyComponent,
  SummaryComponent,
  PreviewScoreComponent,
  CollectResponsesComponent,
  CollectLinkComponent,
  AnalyzeResultsComponent
];

@NgModule({
  imports: [SharedModule, CreateFormRouting, NgxQRCodeModule],
  declarations: [COMPONENTS]
})
export class CreateFormModule {}
