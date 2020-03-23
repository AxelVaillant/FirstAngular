import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
patient : Patient = new Patient()
idpatientURL:number
  constructor(private patientservice :PatientService,private route:ActivatedRoute) { 
    this.idpatientURL =parseInt(this.route.snapshot.paramMap.get('id'));
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
        data=>(
        console.log(data)
        )
      )
    }
}
