import { SurveyFormsCreatorComponent } from './pages/survey-forms/survey-forms-creator/survey-forms-creator.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AdminRouting } from './admin.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { RoleGrantsComponent } from './pages/role-grants/role-grants.component';
import { UserGrantsComponent } from './pages/user-grants/user-grants.component';
import { SurveyFoldersComponent } from './pages/survey-folders/survey-folders.component';
import { SurveyResponsesComponent } from './pages/survey-responses/survey-responses.component';
import { SurveyFormsComponent } from './pages/survey-forms/survey-forms/survey-forms.component';

const COMPONENTS = [
  DashboardComponent,
  RolesComponent,
  UsersComponent,
  RoleGrantsComponent,
  UserGrantsComponent,
  SurveyFoldersComponent,
  SurveyFormsComponent,
  SurveyResponsesComponent,
  SurveyFormsCreatorComponent
];

@NgModule({
  imports: [SharedModule, AdminRouting],
  declarations: [...COMPONENTS]
})
export class AdminModule { }
