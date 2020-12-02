import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { OurStudioComponent } from './our-studio/our-studio.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ToolsComponent } from './tools/tools.component';
import { ClientsComponent } from './clients/clients-component/clients-component.component';
import { ClientDetailsComponent } from './clients/client-details/client-details/client-details.component';
import { ClientAddComponent } from './clients/client-add/client-add/client-add.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { PhotographersComponent } from './photographers/photographers/photographers.component';
import { PhotographersDetailsComponent } from './photographers/photographers-details/photographers-details.component';
import { PhotographersAddComponent } from './photographers/photographers-add/photographers-add.component';
import { PhotographersEditComponent } from './photographers/photographers-edit/photographers-edit.component';
import { SessionsComponent } from './sessions/sessions/sessions.component';
import { SessionsAddComponent } from './sessions/sessions-add/sessions-add.component';
import { SessionsDetailsComponent } from './sessions/sessions-details/sessions-details.component';
import { SessionsEditComponent } from './sessions/sessions-edit/sessions-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    OurStudioComponent,
    ReservationComponent,
    ToolsComponent,
    ClientsComponent,
    ClientDetailsComponent,
    ClientAddComponent,
    ClientEditComponent,
    PhotographersComponent,
    PhotographersDetailsComponent,
    PhotographersAddComponent,
    PhotographersEditComponent,
    SessionsComponent,
    SessionsAddComponent,
    SessionsDetailsComponent,
    SessionsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
