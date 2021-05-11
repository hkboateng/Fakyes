import { Component, OnInit } from '@angular/core';
import {ElectionService} from '../../services/election.service';
import {VoterService} from '../../services/voter.service';
import { Election } from 'src/app/model/election';
import {Voter} from 'src/app/model/voter';
import * as moment from 'moment';
import {Router } from '@angular/router';
import { Response } from 'src/app/model/response';
import {FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor(private electionService: ElectionService,
      private voterService: VoterService,
      private activatedRouter: ActivatedRoute,
      private router: Router) { }

  electionList: Election[] = [];
  electionId: string = "";
  showElectionList = false;
  voterForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    emailAddress: new FormControl('',[Validators.required,Validators.email]),
    gender: new FormControl('',[Validators.required]),
    race: new FormControl('',[Validators.required]),
    electionId: new FormControl('',[this.validateElectionId.bind(this)]),
    password: new FormControl('',[Validators.required]),
    confirmPasswd: new FormControl('',[this.validatePassword.bind(this)])
  });
  savedResponse: Response = {status : false, message: '' };
  ngOnInit(): void {
    
    const id = this.activatedRouter?.snapshot?.paramMap?.get('electionId');
    this.electionId = id !== null ? id : ""
    this.showElectionList = this.electionId !== ""
    if(!this.showElectionList){
      this.getElectionList();
    }
    
  }

  validatePassword(abstractControl: AbstractControl){
    const cfPasswd = abstractControl.value;
    const password = this.voterForm?.value?.password
    if(cfPasswd === "" || cfPasswd === undefined){
      return  {required: true}
    }else if(cfPasswd !== password){
      return {invalidPassword: true}
    }
    return null;
  }
  validateElectionId(abstractControl: AbstractControl){
    const electionId = abstractControl.value
    if(electionId !== null){
      return null;
    }else{
      return {required: true}
    }
  }
  
  getElectionList(){
    this.electionService.getElection().subscribe(data => {
      this.electionList = data;
    });
  }

  
  cancel(){
    this.router.navigate(['voter-list']);
  }
  saveVoter(){
    
    if(this.voterForm.valid){
      const voter: Voter = this.voterForm.value
      voter.electionId = parseInt(this.electionId)

      this.voterService.saveVoter(voter).subscribe(data =>{

        this.savedResponse = data;
        if(data?.status){
          this.router.navigate(['voter-list'])
        }
      })
    }
  }
}
