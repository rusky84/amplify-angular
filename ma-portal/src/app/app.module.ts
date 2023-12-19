import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PortalComponent } from './portal/portal.component';
import { PoliciesComponent } from './policies/policies.component';

import amplifyconfig from '../amplifyconfiguration.json';
import { HomeComponent } from './home/home.component';
Amplify.configure(amplifyconfig);

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PoliciesComponent,
    HomeComponent
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
