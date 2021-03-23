import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { IndexComponent } from './index/index.component';
import { VoterComponent } from './voters/voter/voter.component';
import {VoterListComponent} from './voters/voter-list/voter-list.component';
import {ElectionListComponent} from './election/election-list/election-list.component';
import {AuthGuard} from '@auth0/auth0-angular';
const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },{
    path: 'index',
    component: IndexComponent
  },
  {
   path: 'createVoter',
   component: VoterComponent
   },
   {
    path: 'voter-list',
    component: VoterListComponent
   },
   {
    path: 'election-list',
    component: ElectionListComponent
   },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
