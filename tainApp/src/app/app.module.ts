import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import { IndexComponent } from './index/index.component';
import {AuthModule} from '@auth0/auth0-angular';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
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
