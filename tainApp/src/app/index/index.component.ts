import { Component, OnInit } from '@angular/core';
import {ErrorService} from '../services/error.service'
import {Router} from '@angular/router'
import { Voter } from '../model/voter';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  message: string = '';
  voter: any;
  constructor(private errorService:ErrorService,
    private router: Router) { }
  userType = "administrator"
  ngOnInit(): void {
    this.getUserType()
    if(this.userType === 'voter'){
      this.router.navigate(['voter-detail',this.voter.voterId])
    }
    this.message = this.errorService.getMessage()

  }

  getUserType(){
    const voterJson = localStorage.getItem('userType')
    console.log(voterJson)
    const voter = JSON.parse(voterJson ? voterJson : "{}")
    console.log(voter)
    this.userType = voter && voter !== null  ? "voter" : ""
  }
}
