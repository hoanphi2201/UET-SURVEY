import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './modules/create-form/layout/layout.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { AuthGuard } from '@app/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'create-survey',
    canActivate: [AuthGuard],
    component: CreateSurveyComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/create-form/create-form.module').then(
        m => m.CreateFormModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRouting {}
