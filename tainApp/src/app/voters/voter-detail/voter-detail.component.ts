import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ElectionService} from '../../services/election.service';
import {VoterService} from '../../services/voter.service';
import { Response } from 'src/app/model/response';
import {Router } from '@angular/router';
import {Voter} from '../../model/voter'
@Component({
  selector: 'app-voter-detail',
  templateUrl: './voter-detail.component.html',
  styleUrls: ['./voter-detail.component.css']
})
export class VoterDetailComponent implements OnInit {

  constructor(private electionService: ElectionService,
    private voterService: VoterService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    voterId = ""
    voterDetail: any;
    electionList: any;
  ngOnInit(): void {
    const id = this.activatedRouter?.snapshot?.paramMap?.get('voterId');
    this.voterId = id != null ? id : ""
    this.getVoterDetail(this.voterId);
  }

  getVoterDetail(voterId:string){
    const voter =  {"voterId": voterId};

    this.voterService.getVoter(voter).subscribe(response=>{

      this.voterDetail = response;
    });

    this.electionService.getVoterElection(voter).subscribe(response =>{
      this.electionList = response;
    })
  }

}
