import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from '../../environments/pollapp-settings'
import { Voter } from 'src/app/model/voter';
import { Response } from "../model/response";
import {AuthenticationService} from '../authentication/services/authentication.service';
import { Observable, of, pipe} from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import {ErrorService} from '../services/error.service';
import {Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class VoterService{

    constructor(private http:HttpClient,
        public authenticationService: AuthenticationService,
        private errorService: ErrorService,
        private router: Router){}

    getAllVoters(): Observable<Voter[]>{
       return this.http.get<Voter[]>(BASE_URL+`/voters/all`);
    }

    saveVoter(voter: Voter): Observable<Response>{
        const emailAddress = voter?.emailAddress
        const password = voter?.password
        let voterResponse: any;
        this.authenticationService.Signup(emailAddress,password)
            .pipe(
                map((newUser) =>{
                    voter.uid = newUser.uid;
                    return voter
                })
            ).subscribe(()=>{
                
               this.saveVoterInformation(voter).subscribe(resp=>{
                voterResponse = resp
                if(voterResponse?.status){
                    this.errorService.addErrorMessage(voterResponse?.message)
                    this.router.navigate(['voter-list']);
                }else{
                    this.errorService.addErrorMessage("Voter was not added...try again later.")
                }
               })
            })
            console.log(voterResponse)
        return of(voterResponse)
    }

    saveVoterInformation(voter:Voter): Observable<Response>{
        return this.http.post<Response>(BASE_URL+'/save-voter', voter)
    }
    getVoter(voterId:any): Observable<Response>{
        return this.http.post<Response>(BASE_URL+'/find-voter', voterId)
    }
}