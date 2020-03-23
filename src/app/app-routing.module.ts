import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListHopitauxComponent} from './list-hopitaux/list-hopitaux.component'
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { CreateHopitalComponent } from './create-hopital/create-hopital.component';
import { CreateMedecinComponent } from './create-medecin/create-medecin.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdateHopitalComponent } from './update-hopital/update-hopital.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  {
    path : "hopital",
    component : ListHopitauxComponent
  },
  {
    path : "medecin",
    component : ListMedecinComponent
  },
  {
path : "patient",
component : ListPatientsComponent
  },
  {
    path :"hopital/save",
    component: CreateHopitalComponent
  },
  {
    path :"medecin/save",
    component: CreateMedecinComponent
    
  },
  {
    path :"patient/save",
    component: CreatePatientComponent
  },
  {
    path :"hopital/update/:id",
    component: UpdateHopitalComponent
  },
  {
    path : "medecin/update/:id",
    component: UpdateMedecinComponent
  },
  {
    path : "patient/update/:id",
    component: UpdatePatientComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
