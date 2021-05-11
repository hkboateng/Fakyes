import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { VoterComponent } from './voters/voter/voter.component';
import { VoterListComponent } from './voters/voter-list/voter-list.component';
import { ElectionListComponent } from './election/election-list/election-list.component';
import { AddElectionComponent } from './election/add-election/add-election.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidateComponent } from './candidate/candidate.component';
import { OfficialComponent } from './official/official.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ElectionDetailComponent } from './election/election-detail/election-detail.component';
import { VoterDetailComponent } from './voters/voter-detail/voter-detail.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication/services/authentication.service';
import { VoteComponent } from './voters/vote/vote.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    VoterComponent,
    VoterListComponent,
    ElectionListComponent,
    AddElectionComponent,
    CandidateComponent,
    OfficialComponent,
    AdministratorComponent,
    ElectionDetailComponent,
    VoterDetailComponent,
    VoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
