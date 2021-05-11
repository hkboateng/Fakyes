import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable,} from 'rxjs'
import {BASE_URL} from '../../environments/pollapp-settings'
import { Election } from 'src/app/model/election';
import { Response } from "../model/response";
@Injectable({
    providedIn: 'root'
})
export class ElectorsService{

}