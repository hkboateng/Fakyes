import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable,} from 'rxjs'
import {BASE_URL} from '../../environments/pollapp-settings'
import { Election } from 'src/app/model/election';
import { Response } from "../model/response";
import { Individual } from "../model/individual";
import { Vote } from "../model/vote";
@Injectable({
    providedIn: 'root'
})
export class ElectionService{
    constructor(public http:HttpClient){}

    getAllActiveElectionCount(todayDate: string): Observable<number>{

        return this.http.get<number>(BASE_URL+`/election/count`)
    }

    createNewElection(election:Election): Observable<Response>{
        return this.http.post<Response>(BASE_URL+'/create',election);
    }

    getElectionDetail(electionId: string){
        return this.http.get<any>(BASE_URL+`/election/`+electionId+`/detail`);
    }

    getElection(): Observable<Election[]>{
        return this.http.get<Election[]>(BASE_URL+`/all-election`)
    }
    getVoterElection(voter:any): Observable<Election[]>{
        return this.http.get<Election[]>(BASE_URL+`/voter-election/`+voter?.voterId)
    }

    getElectionCandidate(electionId: number): Observable<Individual[]>{
        return this.http.get<Individual[]>(BASE_URL+`/election-candidates/`+electionId)
    }

    castVote(vote: Vote): Observable<Response>{
        return this.http.post<Response>(BASE_URL+'/election/vote',vote)
    }

    saveElectionCandidate(person: Individual){
        console.log(person)
        return this.http.post<Response>(BASE_URL+'/create/candidate',person)
    }
}