import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import {ElectionService} from '../../services/election.service';
import { Election } from 'src/app/model/election';
import {Router } from '@angular/router';
@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.css']
})
export class ElectionListComponent implements OnInit {
  isLoading = true;
  isViewMode = true;
  totalElections: number = 0;
  todayDate: string = new Date().toDateString();
  electionList: Election[] = [];
  constructor(private electionService: ElectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllElection();
    this.getAllElectionCount();
  }

  getAllElection(){
    return this.electionService.getElection().subscribe(data =>{
      this.electionList = data;
      console.log(this.electionList)
    });
  }
  getAllElectionCount(){
    this.todayDate = formatDate(new Date(), "MM/dd/yyyy",'en-US')
    return this.electionService.getAllActiveElectionCount(this.todayDate).subscribe(data =>{
      
      this.totalElections = data;
    });
  }

  newElection(){
    this.router.navigate(['add-election'])
  }
}
