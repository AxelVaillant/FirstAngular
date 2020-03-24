import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../service/medecin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
patient : Patient = new Patient()
listMedecin : Medecin[]=[];
idpatientURL:number
  constructor(private patientservice :PatientService,private route:ActivatedRoute,private medecinservice : MedecinService) { 
    this.idpatientURL =parseInt(this.route.snapshot.paramMap.get('id'));
    this.medecinservice.getAll().subscribe(
      data => {
        this.listMedecin = data;
      }
    ) 
  }

  ngOnInit(): void {
    console.log(this.idpatientURL);
this.patientservice.getbyid(this.idpatientURL).subscribe(
  data=>(
    this.patient=data
  ))
  }
  getbyid(idP:number){
    this.patientservice.getbyid(idP).subscribe(
      data=>(
        console.log(data)
      )
    )}
    updatePatient(idP:number , patient:Patient){
      this.patientservice.updatepatient(idP,patient).subscribe(
        data=>{
          if( data['idpatient'] == 0){
            
          }else if (data['idpatient']){
            Swal.fire(
              'Patient modifié!',
              "Le patient n°"+this.patient.idpatient +' a bien été modifié !',
              'success'
            ).then(()=>
             window.location.href = "http://localhost:4200/patient"
            )
          }
        }
      )
    }
    compareFn(medecin1: Medecin, medecin2: Medecin) {
      return medecin1 && medecin2 ? medecin1.idmedecin === medecin2.idmedecin : medecin1 === medecin2;
  }
}
