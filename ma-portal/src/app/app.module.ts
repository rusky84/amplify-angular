import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PortalComponent } from './portal/portal.component';
import { PoliciesComponent } from './policies/policies.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CurrentFunctionsComponent } from './_share/components/current-functions/current-functions.component';
import { SigninsignupComponent } from './portal/signinsignup/signinsignup.component';
import { PortalLandingComponent } from './portal/portal-landing/portal-landing.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

import amplifyconfig from '../amplifyconfiguration.json';
import { WaComponent } from './portal/wa/wa.component';
import { TitleComponent } from './_share/components/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
Amplify.configure(amplifyconfig);

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PoliciesComponent,
    HomeComponent,
    CurrentFunctionsComponent,
    SigninsignupComponent,
    PortalLandingComponent,
    WaComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    GridModule,
    ListViewModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
