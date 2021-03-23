import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import { IndexComponent } from './index/index.component';
import {AuthModule} from '@auth0/auth0-angular';
import { HeaderComponent } from './header/header.component';
import { VoterComponent } from './voters/voter/voter.component';
import { VoterListComponent } from './voters/voter-list/voter-list.component';
import { ElectionListComponent } from './election/election-list/election-list.component';
import { AddElectionComponent } from './election/add-election/add-election.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    VoterComponent,
    VoterListComponent,
    ElectionListComponent,
    AddElectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ReactiveFormsModule,
        // Import the module into the application, with configuration
        AuthModule.forRoot({
          domain: 'tain.us.auth0.com',
          clientId: '4vlIOPMCLk8LoppUd32Gde0ULZqS6TAR'
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
