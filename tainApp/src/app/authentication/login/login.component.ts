import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import {LoginService} from '../services/login-service';
import {Router, CanActivate } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {LoginUser} from '../models/login-user';
import {ErrorService} from '../../services/error.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginUser = {}
  loginResponse: any;
  hasError = false;
  isSuccess = false;
  responseMessage = '';
  loginGrp = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    passWd: new FormControl('', Validators.required)
  });
  constructor(  public loginService: LoginService,
              public router: Router,
              public authenticationService: AuthenticationService,
              private errorService: ErrorService) {
  }

  ngOnInit() {
    this.responseMessage = this.errorService.getMessage()
  }
  
  login() {
    this.loginUser = this.loginGrp.value;
    this.loginService.authenticateUser(this.loginUser);
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
