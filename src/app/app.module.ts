import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHopitauxComponent } from './list-hopitaux/list-hopitaux.component';
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { CreateHopitalComponent } from './create-hopital/create-hopital.component';
import { CreateMedecinComponent } from './create-medecin/create-medecin.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdateHopitalComponent } from './update-hopital/update-hopital.component';
import { HeaderComponent } from './header/header.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ListHopitauxComponent,
    ListMedecinComponent,
    ListPatientsComponent,
    CreateHopitalComponent,
    CreateMedecinComponent,
    CreatePatientComponent,
    UpdateHopitalComponent,
    HeaderComponent,
    UpdateMedecinComponent,
    UpdatePatientComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
