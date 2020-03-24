import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../models/patient';
import { MedecinService } from '../service/medecin.service';
import { Medecin } from '../models/medecin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  newPatient : Patient = new Patient();
  listMedecin : Medecin[] = [];
  constructor(private patientservice : PatientService, private medecinService : MedecinService) { }

  ngOnInit(): void {
    this.medecinService.getAll().subscribe(
      data => {
        this.listMedecin = data;
      }
    )
  }
  createPatient(){
    this.patientservice.create(this.newPatient).subscribe(
      data=>{
        if( data['idpatient'] == 0){
          
        }else if (data['idpatient']){
          Swal.fire(
            'Patient ajouté!',
            this.newPatient.nompatient +' a bien été ajouté !',
            'success'
          ).then(()=>
           window.location.href = "http://localhost:4200/patient"
          )
        }
      }
    )
  }
}
