import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_share/services/auth/guards/auth.guard';
import { PortalLandingComponent } from './portal/portal-landing/portal-landing.component';
import { WaComponent } from './portal/wa/wa.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portal',
    children: [
      {
        path: '',
        component: PortalComponent
      },
      {
        path: 'wa',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: WaComponent
          },
        ]
      },
    ]
  },
  {
    path: 'policies',
    component: PoliciesComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
