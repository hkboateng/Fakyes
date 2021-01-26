import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import {LoginService} from '../services/login-service';
import {Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResponse: any;
  hasError = false;
  isSuccess = false;
  responseMessage = '';
  loginGrp = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    passWd: new FormControl('', Validators.required)
  });
  constructor(  public loginService: LoginService,
              public router: Router) {
  }

  ngOnInit() {
  }
  onSubmit(loginBo: any) {

  }

  navigateAfterLogin(){

  }
  navigateSignUp(){
    this.router.navigate(['signup']);
  }

  resetPage(){
    this.loginGrp.reset();
    this.hasError = false;
    this.isSuccess = false;
  }
}
