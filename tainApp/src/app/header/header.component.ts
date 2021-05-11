import { Component, OnInit, HostListener } from '@angular/core';
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
  userType = "administrator"
  constructor(private authService: AuthenticationService) {

   }


  ngOnInit() {
   this.isAuth = this.authService.isLoggedIn();
   this.getUserType()
  }

  ngOnDestroy(){
    localStorage.removeItem('user');
    console.log("removed")
  }
  signOut(){
    this.authService.SignOut();
  }

  clearLocalStorage():any{

  }

  getUserType(){
    const user = localStorage.getItem('userType')
    this.userType = user && user !== null  ? user : ""
  }
}
