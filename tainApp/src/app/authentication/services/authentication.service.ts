import { Injectable } from "@angular/core";
import {AuthService} from '@auth0/auth0-angular';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    clientId = '4vlIOPMCLk8LoppUd32Gde0ULZqS6TAR'
    constructor(
        private authService: AuthService
    ){}
    
    authenticateUser():any{

    }

    
}

