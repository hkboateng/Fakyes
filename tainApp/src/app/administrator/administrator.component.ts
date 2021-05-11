import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AdministratorService } from '../services/administrator.service';
import {Signup} from '../authentication/models/auth-signup';
import {ErrorService} from '../services/error.service';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  adminList: Signup[] = []

  constructor(private router: Router,
    private administratorService: AdministratorService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.getAllAdministrators();
    this.getMessages();
  }

  message: string ="";
  getAllAdministrators(){
     this.administratorService.getAllAdministrators().subscribe(
       admin =>{
         this.adminList = admin
       }
     );
  }

  addAdministrator(){
    this.router.navigate(['authentication/signup']);
  }

  getMessages(){
    this.message = this.errorService.getMessage();
    console.log(this.message)
  }
}
