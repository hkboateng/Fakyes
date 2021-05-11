import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable,} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class ErrorService{
    errorMessage: any[] = [];

    addErrorMessage( message:string){
        this.errorMessage.push(message);
    }

    getMessage(){
        return this.errorMessage[0]
    }
    clearError(){
        this.errorMessage.pop()
    }
    
}