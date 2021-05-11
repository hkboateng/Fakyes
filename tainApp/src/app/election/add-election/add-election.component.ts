import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms';
import { Election } from 'src/app/model/election';
import {ElectionService} from '../../services/election.service';
import * as moment from 'moment';
import {Router } from '@angular/router';
import { Response } from 'src/app/model/response';
@Component({
  selector: 'app-add-election',
  templateUrl: './add-election.component.html',
  styleUrls: ['./add-election.component.css']
})
export class AddElectionComponent implements OnInit {

  constructor(private electionService: ElectionService, private router: Router) { 

  }

  addElection: Election = {
    electionId: 0,
    electionName : '',
    electionUniqueId: '',
    electionStartDateTime: new Date(),
    electionEndDateTime: new Date()
  }
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy',
    defaultOpen: true
}
  savedResponse: Response = {status : false, message: '' };
  ngOnInit(): void {

  }
  electionFormGrp = new FormGroup({
    electionName : new FormControl(this.addElection?.electionName,[Validators.required]),
    electionStartDateTime : new FormControl('',[Validators.required]),
    electionEndDateTime: new FormControl('',[Validators.required])
  });

  validateDate(abstractDate: AbstractControl){

    
  }
  addElections(){
    const election: Election  = this.electionFormGrp.value
    console.log(election.electionEndDateTime,election.electionStartDateTime )
    console.log(this.electionFormGrp.value)
   election.electionEndDateTime = new Date(election.electionEndDateTime)
   election.electionStartDateTime = new Date(election.electionStartDateTime)
   console.log(election)
    if(this.electionFormGrp.valid){
      this.electionService.createNewElection(election).subscribe(data =>{
        this.savedResponse = data;
        if(this.savedResponse.status){
          this.router.navigate(['election-list'])
        }
      });
    }
  }
}
