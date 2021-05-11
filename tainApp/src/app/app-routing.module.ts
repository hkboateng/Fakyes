import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { IndexComponent } from './index/index.component';
import { VoterComponent } from './voters/voter/voter.component';
import {VoterListComponent} from './voters/voter-list/voter-list.component';
import {ElectionListComponent} from './election/election-list/election-list.component';
import {AuthenticationService} from './authentication/services/authentication.service';
import { AddElectionComponent } from './election/add-election/add-election.component';
import {ElectionDetailComponent} from './election/election-detail/election-detail.component'
import { CandidateComponent } from './candidate/candidate.component';
import { AdministratorComponent } from './administrator/administrator.component';
import {VoterDetailComponent} from './voters/voter-detail/voter-detail.component';
import { VoteComponent } from './voters/vote/vote.component';
const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule), canActivate:[AuthenticationService]
  },{
    path: 'index',
    component: IndexComponent, canActivate:[AuthenticationService]
  },
  {
   path: 'create-voter/:electionId',
   component: VoterComponent, canActivate:[AuthenticationService]
   },
   {
    path: 'voter-list',
    component: VoterListComponent, canActivate:[AuthenticationService]
   },
   {
    path: 'election-list',
    component: ElectionListComponent, canActivate:[AuthenticationService]
   },
   {
    path: 'add-election',
    component: AddElectionComponent, canActivate:[AuthenticationService]
   },
   {
    path: 'election-detail/:electionUniqueId',
    component: ElectionDetailComponent, canActivate:[AuthenticationService]
   },
   {
     path: 'add-candidate',
     component: CandidateComponent, canActivate:[AuthenticationService]
   },
   {
    path: 'admin-list',
    component: AdministratorComponent, canActivate:[AuthenticationService]
   },
   {
     path: 'voter-detail/:voterId',
     component: VoterDetailComponent, canActivate:[AuthenticationService]
   },
   {
    path: 'cast-vote/:electionId/voter/:voterId',
    component: VoteComponent, canActivate:[AuthenticationService]
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
