import { Component, OnInit } from '@angular/core';
import {ElectionService} from '../services/election.service';
import { Election } from 'src/app/model/election';
import {Individual} from 'src/app/model/individual';
import * as moment from 'moment';
import {Router } from '@angular/router';
import { Response } from 'src/app/model/response';
import {FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  constructor(private electionService: ElectionService,
    private router: Router) { }
  electionList: Election[] = [];

  showAdministrator: boolean = false;
  showOfficial: boolean = false;
  showCandidate : boolean = false;
  objList = {
    "candidate": "Election Candidate"
  }

  candidateForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    emailAddress: new FormControl('',[Validators.required,Validators.email]),
    electionId: new FormControl('',[this.validateCandidate.bind(this)]),
    candidateSymbol: new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
    this.getElectionList();
    this.resetPersonToggle();
  }

  validateUsername(abstractControl: AbstractControl){
    const username = abstractControl.value;
    if((this.showOfficial || this.showAdministrator) && username === null){
      return {required: true}
    }else{
      return null;
    }
  }
  validatePassword(abstractControl: AbstractControl){
    const password = abstractControl.value
    if(this.showOfficial || this.showAdministrator ){
      if(password === undefined || password === null){
        return {required: true}
      }else if(password.length < 8){
        return {minLength: true}
      }
      
    }
    return null;
  }

  resetFields(){
    this.candidateForm.controls['password']?.reset();
    this.candidateForm.controls['confirmPassword']?.reset();
    this.candidateForm.controls['username']?.reset();
    this.candidateForm.controls['electionId']?.reset();
  }
  validateConfirmPassword(abstractControl: AbstractControl){
    const confpassword = abstractControl.value
    const password = this.candidateForm?.value.password;
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
    const electionId = abstractControl.value
    if(this.showCandidate && electionId == null){
      return {electionId: true};
    }else if(this.showOfficial && electionId == null){
      return {electionId: true};
    }else{
      return null;
    }
  }
  get c(){
    return this.candidateForm.controls;
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
    this.individulType = person;
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
  individulType: string = ''
  submitForm(){
    let person: Individual = this.candidateForm.value;
    person.individual = "candidate"

    this.electionService.saveElectionCandidate(person).subscribe(
    data =>{
      if(data?.status){
        this.router.navigate(['election-list'])
      }
    }
    );
  }
}
