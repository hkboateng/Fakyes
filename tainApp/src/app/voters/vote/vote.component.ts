import { Component, OnInit } from '@angular/core';
import {Election} from '../../model/election';
import {ElectionService} from '../../services/election.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Vote } from 'src/app/model/vote';
import { Individual } from 'src/app/model/individual';
import {FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  electionName: string = "";
  voterId: number = 0;
  electionId: number = 0;
  electionList: Election[]= [];
  individualList: Individual[] = []

  voteForm  = new FormGroup({
    voteCast: new FormControl('',[Validators.required]),
  });
  constructor(private electionService: ElectionService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const electId = this.activatedRouter?.snapshot?.paramMap?.get('electionId');
    const vterId = this.activatedRouter?.snapshot?.paramMap?.get('voterId');
    this.electionId = electId !== null ? parseInt(electId) : 0
    this.voterId = vterId !== null ? parseInt(vterId) : 0
    this.electionService.getElectionCandidate(this.electionId).subscribe(
      data => {
        this.individualList = data
      }
    );
  }

  message = ""
  submitVote(){
    const vote: Vote = {
      "electionId": this.electionId,
      "voterId": this.voterId,
      "vote": this.voteForm.value.voteCast
    }
    this.electionService.castVote(vote).subscribe(
      data=>{
        if(data?.status){
          this.message = "Vote was saved successfully"
          this.router.navigate(['/voter-detail',this.voterId])
        }else{
          this.message = "Vote was not save..Try again"
        }
      }
    );
  }

  cancel(){
    this.router.navigate(['/voter-detail',this.voterId])
  }
}
