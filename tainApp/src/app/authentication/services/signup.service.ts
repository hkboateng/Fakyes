import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Signup } from "../models/auth-signup";
import {Observable,} from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class SignupService{
    constructor(private http:HttpClient){}

    signupUser(user: Signup): any{
        return null;
    }
}
