import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ClientAddComponent } from './clients/client-add/client-add/client-add.component';
import { ClientDetailsComponent } from './clients/client-details/client-details/client-details.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { LoginComponent } from './login/login/login.component';

import { MainPageComponent } from './main-page/main-page.component';
import { OurStudioComponent } from './our-studio/our-studio.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SigninComponent } from './signin/signin.component';
import { ToolsComponent } from './tools/tools.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainPageComponent },
    { path: 'ourStudio', component: OurStudioComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'clients', component: ClientsComponent, children: [
        { path: 'add', component: ClientAddComponent },
        { path: 'details/:id', component: ClientDetailsComponent },
        { path: 'edit/:id', component: ClientEditComponent }
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}