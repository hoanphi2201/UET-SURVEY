import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthRouting } from './auth.routing';
@NgModule({
  imports: [SharedModule, AuthRouting],
  declarations: [LoginComponent, SignUpComponent]
})
export class AuthModule {}
