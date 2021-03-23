import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import {Signup} from '../models/auth-signup';
import { SignupService} from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: Signup = {} as Signup;

  constructor() {

  }

  formGroup: any;

  ngOnInit(): void {
    this.buildFormGroup();
  }

  buildFormGroup =() => {
    this.formGroup = new FormGroup({
      firstName : new FormControl(this.newUser?.firstName,[Validators.required]),
      lastName : new FormControl(this.newUser?.lastName,[Validators.required]),
      emailAddress: new FormControl(this.newUser?.emailAddress,[Validators.required,Validators.email]),
      partyAffiliate: new FormControl(this.newUser?.partyAffiliate,[Validators.required])
    });
  }

  submitSignup() {
    if(this.formGroup.valid){
      //this.signupService.signupUser(this.newUser).subscribe();
    }
  }
}
