import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Signup } from "../models/auth-signup";
import { Observable, of, pipe} from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import {AuthenticationService} from '../services/authentication.service';
import {BASE_URL} from '../../../environments/pollapp-settings';
import {Router} from '@angular/router';
import {ErrorService} from '../../services/error.service';
@Injectable({
    providedIn: 'root'
})
export class SignupService{
    constructor(private authService: AuthenticationService, private httpClient: HttpClient,
        private router: Router, private errorService: ErrorService){}
    response: any = {}
    signupUser(user: Signup): any{
        const emailAddress = user?.emailAddress;
        const password = user?.password
        const signedUpUser: any  = user;
        this.authService.Signup(emailAddress,password)
       .pipe(
        map((newUser) =>{
            signedUpUser.uid = newUser.uid;
            return signedUpUser
        })
       ).subscribe(data =>{
        this.sendUserInformation(data).subscribe(event=>{
             this.response = event;
             if(this.response.status === true){
                this.errorService.addErrorMessage("Administrator was added successfully")
                this.router.navigate(['admin-list']);
             }else{
                this.errorService.addErrorMessage("Administrator was not added successfully")
             }
        });
       });
       
    }

    sendUserInformation(user: Signup): Observable<any> {
        console.log(user)
        if(user.administratorType === "candidate"){
            console.log(BASE_URL+"/create/candidate")
            return this.httpClient.post<any>(BASE_URL+"/create/candidate",user);
        }
        return this.httpClient.post(BASE_URL+"/create/administrator",user);
    }
}
