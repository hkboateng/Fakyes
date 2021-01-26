import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  currentPage: string = '';
  isAuthenticate: boolean = false;
  isAuth: boolean = false;
  constructor( authService: AuthenticationService) {
    this.isAuthenticated();
   }


  ngOnInit() {
  }

  isAuthenticated() {

    return this.isAuthenticate;
  } 
}
