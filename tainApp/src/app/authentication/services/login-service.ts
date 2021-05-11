import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router, CanActivate } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from '../../../environments/pollapp-settings'
import {ErrorService} from '../../services/error.service';
@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public httpClient: HttpClient,
        public error: ErrorService
    ){}

    authenticateUser(user:any){
        const emailAddress = user?.userName;
        const password = user?.passWd;
        this.afAuth.signInWithEmailAndPassword(emailAddress, password)
                    .then((response)=>{
                        const user = response.user;
                        this.getUserInformation(user)
                        
                    }).catch(err =>{

                    }).finally(()=>{

                    });
    }

    getUserInformation(user:any){
         this.httpClient.get<any>(BASE_URL+`/user/`+user?.uid+`/info`).subscribe(data=>{

             if(data !== null){
                  localStorage.setItem('userType',JSON.stringify(data));
                  localStorage.setItem('voterId',data?.voterId);
                  this.getUserType();
             }else{
                localStorage.removeItem('userType');
                localStorage.removeItem('voterId');
                this.getUserType();
             }
         })
    }
    getUserType(){
        this.error.clearError()
        const voterJson = localStorage.getItem('userType')

        const voter = JSON.parse(voterJson ? voterJson : "null")
        if(voter === null){
            this.router.navigate(['index'])
        }else{
            console.log(voter)
            this.router.navigate(['voter-detail',voter?.voterId])
        }
        
      }
}