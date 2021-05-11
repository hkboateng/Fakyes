import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ElectionService} from '../../services/election.service'
import * as moment from 'moment';
@Component({
  selector: 'app-election-detail',
  templateUrl: './election-detail.component.html',
  styleUrls: ['./election-detail.component.css']
})
export class ElectionDetailComponent implements OnInit {

  electionStatus: string = "";
  electionDetail: any = {}
  electionName: string = "";
  electionUniqueId: string = "";
  constructor(private activatedRouter: ActivatedRoute,
    public electionService: ElectionService) { }

  ngOnInit(): void {
    const id = this.activatedRouter?.snapshot?.paramMap?.get('electionUniqueId');
    this.electionUniqueId = id !== null ? id : ""
    this.getElectionDetail();
  }

  getElectionDetail(){
    this.electionService.getElectionDetail(this.electionUniqueId).subscribe(
      response =>{
        this.electionDetail = response;
      }
    );
    this.getElectionStatus(this.electionDetail);
  }

  getElectionStatus(electionDetail:any){
    const electionEndDate = moment(electionDetail?.electionEndDateTime);
    const todayDate =  moment();
    this.electionStatus = todayDate.isAfter(electionEndDate) ? "Election Voting Ended" 
    : todayDate.isBefore(electionEndDate) ? "Election Voting has not started" : "Election in progress"
  }
}
