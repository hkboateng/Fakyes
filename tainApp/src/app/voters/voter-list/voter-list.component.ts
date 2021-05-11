import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Voter } from 'src/app/model/voter';
import {VoterService} from '../../services/voter.service';
import {ErrorService} from '../../services/error.service';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {

  message: string = "";
  constructor(private router: Router,
      private voterService: VoterService,
      private errorService: ErrorService,) { }
  ngOnInit(): void {
    this.getVoterList();
    this.message = this.errorService.getMessage()
    this.errorService.clearError()
  }

  voterList: Voter[] = []

  getVoterList(){
    this.voterService.getAllVoters().subscribe(data=>{
      this.voterList = data;
    })
  }
  newVoter(){
    this.router.navigate(['create-voter/0'])
  }
  ngOnDestroy(){
    //this.electionService.getElection().
  }
}
