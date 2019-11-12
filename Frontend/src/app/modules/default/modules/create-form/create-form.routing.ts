import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSurveyComponent } from './pages/design-survey/design-survey.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PreviewScoreComponent } from './pages/preview-score/preview-score.component';
import { CollectResponsesComponent } from './pages/collect-responses/collect-responses.component';
import { CollectLinkComponent } from './pages/collect-link/collect-link.component';
import { AuthGuard } from '@app/core';
import { AnalyzeResultsComponent } from './pages/analyze-results/analyze-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'design-survey',
    pathMatch: 'full'
  },
  {
    path: 'design-survey/:surveyFormId',
    canActivate: [AuthGuard],
    component: DesignSurveyComponent
  },
  {
    path: 'summary/:surveyFormId',
    canActivate: [AuthGuard],
    component: SummaryComponent
  },
  {
    path: 'preview-score/:surveyFormId',
    canActivate: [AuthGuard],
    component: PreviewScoreComponent
  },
  {
    path: 'collector-responses/:surveyFormId',
    canActivate: [AuthGuard],
    component: CollectResponsesComponent
  },
  {
    path: 'analyze-results/:surveyFormId',
    canActivate: [AuthGuard],
    component: AnalyzeResultsComponent
  },
  {
    path: 'collector-responses/collector-link/:collectorId',
    canActivate: [AuthGuard],
    component: CollectLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRouting {}
