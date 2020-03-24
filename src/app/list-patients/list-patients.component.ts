import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  listPatients : Patient[] = [];
  constructor(private patientservice : PatientService) { }

  ngOnInit(): void {

    this.patientservice.getAll().subscribe(
      data => {
        this.listPatients = data;
      }
    )
  }
  deletepatient(idpatient : number){
    Swal.fire({
      title: 'Etes vous sur ?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',        
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer!'
    }).then((result) => {
      if(result.value){
        this.patientservice.deletepatient(idpatient).subscribe(
          data => {
          if( data == 0){
            
          }else if (data){
            Swal.fire(
              'Patient supprimé!',
              "L'patient a bien été supprimé !",
              'success'
            ).then(()=>
             window.location.href = "http://localhost:4200/patient"
            )
      }
      })
      }

  }
)
}
getbyid(idpatient:number){
  this.patientservice.getbyid(idpatient).subscribe(
    data=>(
      console.log(data)
    )
  )}

updatePatient(idP:number , patient:Patient){
this.patientservice.updatepatient(idP,patient).subscribe(
data=>(
console.log(data)
)
)
}

}
