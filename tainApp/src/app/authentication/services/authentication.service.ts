import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router, CanActivate } from "@angular/router";
import {User} from '../models/user';
import {Observable, of,from} from 'rxjs';
import {ErrorService} from '../../services/error.service';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements CanActivate{
    userData: any;
    userIsLoggedIn: boolean = false;;
    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public errorService: ErrorService
    ){
        this.afAuth.authState.subscribe(user => {
            if (user) {
              this.userData = user;
              localStorage.setItem('user', JSON.stringify(this.userData));
            } else {
              localStorage.setItem('user', "");
            }
          })
    }
    
    canActivate(): boolean{
      if(!this.isLoggedIn()){
        this.router.navigate(['authentication/login']);
      }
      return true;
    }
    Signup(email: string, password: string): Observable<any>{
        let user: any = {};
        let userData =  this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          /* Call the SendVerificaitonMail() function when new user sign 
          up and returns promise */
          //this.SendVerificationMail();
          
          user = result?.user
          this.SetUserData(user);
          return  user;
        }).catch((error) => {
         // console.log(error.message)
        });
       return from(userData)
    }
 /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: true
    }
    return userRef.set(userData, {
      merge: true
    })
  }

   // Returns true when user is looged in and email is verified
   isLoggedIn(): boolean {
    const userStored = localStorage.getItem('user');
    if(userStored !== null ){
        const user = JSON.parse(userStored || '{}');
        return (user !== null && user.isAnonymous !== true) ? true : false;
    }else{
        return false;
    }

  }

      // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.errorService.addErrorMessage("You have successfully logged out.")
      this.router.navigate(['authentication/login']);
      
    })
  }
}

