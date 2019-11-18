import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSurveyComponent } from './pages/design-survey/design-survey.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PreviewScoreComponent } from './pages/preview-score/preview-score.component';
import { CollectResponsesComponent } from './pages/collect-responses/collect-responses.component';
import { CollectLinkComponent } from './pages/collect-link/collect-link.component';
import { AuthGuard, extract } from '@app/core';
import { AnalyzeResultsComponent } from './pages/analyze-results/analyze-results.component';
import { CollectEmailManageComponent } from './pages/collect-email-manage/collect-email-manage.component';
import { CollectEmailComposeComponent } from './pages/collect-email-compose/collect-email-compose.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'design-survey',
    pathMatch: 'full'
  },
  {
    path: 'design-survey/:surveyFormId',
    canActivate: [AuthGuard],
    component: DesignSurveyComponent,
    data: { title: extract('UetMonkey - Design') }
  },
  {
    path: 'summary/:surveyFormId',
    canActivate: [AuthGuard],
    component: SummaryComponent,
    data: { title: extract('UetMonkey - Survey Summary') }  
  },
  {
    path: 'preview-score/:surveyFormId',
    canActivate: [AuthGuard],
    component: PreviewScoreComponent,
    data: { title: extract('UetMonkey - Design') }
  },
  {
    path: 'collector-responses/:surveyFormId',
    canActivate: [AuthGuard],
    component: CollectResponsesComponent,
    data: { title: extract('UetMonkey - Collector List') }
  },
  {
    path: 'analyze-results/:surveyFormId',
    canActivate: [AuthGuard],
    component: AnalyzeResultsComponent,
    data: { title: extract('UetMonkey - Analyze') }
  },
  {
    path: 'collector-responses',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'collector-link/:collectorId',
        canActivate: [AuthGuard],
        component: CollectLinkComponent,
        data: { title: extract('UetMonkey - Collector Details') }
      },
      {
        path: 'collector-email',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'manage/:collectorId',
            canActivate: [AuthGuard],
            component: CollectEmailManageComponent,
            data: { title: extract('UetMonkey - Manage Your Messages') }
          },
          {
            path: 'compose/:collectorId',
            canActivate: [AuthGuard],
            component: CollectEmailComposeComponent,
            data: { title: extract('UetMonkey - Compose Email Message') }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRouting {}
