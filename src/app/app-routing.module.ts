import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from './main-page/main-page.component';
import { OurStudioComponent } from './our-studio/our-studio.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ToolsComponent } from './tools/tools.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainPageComponent},
    { path: 'ourStudio', component: OurStudioComponent},
    { path: 'reservation', component: ReservationComponent},
    { path: 'tools', component: ToolsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}