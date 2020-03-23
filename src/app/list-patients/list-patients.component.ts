import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';

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
    this.patientservice.deletepatient(idpatient).subscribe(
      data=>(
      console.log(data)
      )
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
