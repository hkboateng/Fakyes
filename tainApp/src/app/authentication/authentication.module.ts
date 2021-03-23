import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {AuthenticationRoutingModule} from './authentication.routing';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
      LoginComponent,
      AuthenticationComponent,
      SignupComponent
  ],
  imports: [AuthenticationRoutingModule
  ],
})
export class AuthenticationModule { }