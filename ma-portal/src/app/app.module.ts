import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PortalComponent } from './portal/portal.component';

//import awsconfig from './../aws-exports';
//Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
