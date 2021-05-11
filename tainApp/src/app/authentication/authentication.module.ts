import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthenticationRoutingModule} from './authentication.routing';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
      LoginComponent,
      
      AuthenticationComponent,
      SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthenticationRoutingModule
  ],
})
export class AuthenticationModule { }