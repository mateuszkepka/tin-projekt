import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAddComponent } from './clients/client-add/client-add/client-add.component';
import { ClientDetailsComponent } from './clients/client-details/client-details/client-details.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { PhotographersComponent } from './photographers/photographers/photographers.component'
import { SessionsComponent } from './sessions/sessions/sessions.component';
import { LoginComponent } from './login/login/login.component';

import { MainPageComponent } from './main-page/main-page.component';
import { OurStudioComponent } from './our-studio/our-studio.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SigninComponent } from './signin/signin.component';
import { ToolsComponent } from './tools/tools.component';
import { PhotographersAddComponent } from './photographers/photographers-add/photographers-add.component';
import { PhotographersDetailsComponent } from './photographers/photographers-details/photographers-details.component';
import { PhotographersEditComponent } from './photographers/photographers-edit/photographers-edit.component';
import { SessionsAddComponent } from './sessions/sessions-add/sessions-add.component';
import { SessionsDetailsComponent } from './sessions/sessions-details/sessions-details.component';
import { SessionsEditComponent } from './sessions/sessions-edit/sessions-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'ourStudio', component: OurStudioComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'clients',
    component: ClientsComponent,
    children: [
      { path: 'add', component: ClientAddComponent },
      { path: 'details/:id', component: ClientDetailsComponent },
      { path: 'edit/:id', component: ClientEditComponent },
    ],
  },
  {
    path: 'photographers',
    component: PhotographersComponent,
    children: [
      { path: 'add', component: PhotographersAddComponent },
      { path: 'details/:id', component: PhotographersDetailsComponent },
      { path: 'edit/:id', component: PhotographersEditComponent },
    ],
  },
  {
    path: 'sessions',
    component: SessionsComponent,
    children: [
      { path: 'add', component: SessionsAddComponent },
      { path: 'details/:id', component: SessionsDetailsComponent },
      { path: 'edit/:id', component: SessionsEditComponent },
    ],
  },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
