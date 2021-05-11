import { Component, OnInit } from '@angular/core';
import {Signup} from '../models/auth-signup';
import { SignupService} from '../services/signup.service';
import {ElectionService} from '../../services/election.service';
import { Election } from 'src/app/model/election';
import {Individual} from 'src/app/model/individual';
import * as moment from 'moment';
import {Router } from '@angular/router';
import { take} from 'rxjs/operators';
import {FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms';
import { ChangeDetectorRef, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: Signup = {} as Signup;
  electionPerson: string = "Administrator";
  constructor(private electionService: ElectionService,
    private signupService: SignupService,
    private router: Router,
    private cdref: ChangeDetectorRef) { }

    ngAfterContentChecked() {

      this.cdref.detectChanges();

    }
  electionList: Election[] = [];

  showAdministrator: boolean = false;
  showOfficial: boolean = false;
  showCandidate : boolean = false;
  objList = {
    "administrator": "Administrator",
    "official": "Election Official"
  }
  signUpForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    emailAddress: new FormControl('',[Validators.required,Validators.email]),
    electionId: new FormControl('',[this.validateCandidate.bind(this)]),
    username: new FormControl('',[this.validateUsername.bind(this)]),
    password: new FormControl('',[this.validatePassword.bind(this)]),
    confirmPassword: new FormControl('',[ this.validateConfirmPassword.bind(this)]),

  });

  ngOnInit(): void {
    this.getElectionList();
    this.resetPersonToggle();
  }

  validateUsername(abstractControl: AbstractControl){
    const username = abstractControl.value;
    if(this.administratorType === null){
      return {required: true}
    }
    if((this.showOfficial || this.showAdministrator) && username === null){
      return {required: true}
    }else{
      return null;
    }
  }
  validatePassword(abstractControl: AbstractControl){
    if(this.administratorType === null){
      return {required: true}
    }
    const password = abstractControl.value
    if((this.showOfficial || this.showAdministrator) && (password === undefined || password === null)){
      return {required: true}
    }
    return null;
  }

  resetFields(){
    this.signUpForm.controls['password']?.reset();
    this.signUpForm.controls['confirmPassword']?.reset();
    this.signUpForm.controls['username']?.reset();
    this.signUpForm.controls['electionId']?.reset();
  }
  validateConfirmPassword(abstractControl: AbstractControl){
    if(this.administratorType === undefined || this.administratorType === ""){
      return {required: true}
    }
    const confpassword = abstractControl.value
    const password = this.signUpForm?.value.password;
    if(this.showOfficial || this.showAdministrator){
      if(confpassword === undefined || confpassword === null){
        return {required: true}
      }else if(confpassword !== password){
        return {confirmPassword: true}
      }
      
    }
    return null;
  }
  validateCandidate(abstractControl: AbstractControl){
    if(this.administratorType === null){
      return {required: true}
    }
    const electionId = abstractControl.value
    if(this.showCandidate && electionId === null){
      return {required: true};
    }else if(this.showOfficial && electionId === null){
      return {required: true};
    }else{
      return null;
    }
  }
  get c(){
    return this.signUpForm.controls;
  }
  getElectionList(){
    this.electionService.getElection().subscribe(data => {
      this.electionList = data;
    });
  }
  resetPersonToggle(){
    this.showAdministrator = false;
    this.showOfficial = false;
    this.showCandidate = false;
  }

  togglePerson(person: string){
    this.administratorType = person;
    this.resetPersonToggle();
    this.resetFields();
    if(person === "administrator"){
      this.showAdministrator = true;
    }else if(person === "candidate"){
      this.showCandidate = true;
    }else{
      this.showOfficial = true;
    }
  }
  administratorType: string = ''
  
  submitForm(){
    let person: Individual = this.signUpForm.value;
    person.individual = this.administratorType
  }
  submitSignup() {
    if(this.signUpForm.valid){
      this.newUser = this.signUpForm.value;
      this.newUser.administratorType = this.administratorType
      let resp : any;
      this.signupService.signupUser(this.newUser);

    }
  }
}