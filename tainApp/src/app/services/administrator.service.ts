import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable,} from 'rxjs'
import {BASE_URL} from '../../environments/pollapp-settings'
import { Election } from 'src/app/model/election';
import { Response } from "../model/response";
import {Signup} from '../authentication/models/auth-signup';
@Injectable({
    providedIn: 'root'
})
export class AdministratorService{

    constructor(
        private http: HttpClient
    ){}
    getAllAdministrators(): Observable<Signup[]>{
        return this.http.get<Signup[]>(BASE_URL+`/all-administrator`)
    }

}