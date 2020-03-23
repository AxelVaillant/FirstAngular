import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Patient[]>('http://localhost:8080/patient/all').pipe()
  }
  create(patient : Patient){
    return this.http.post<Patient>('http://localhost:8080/patient/save',patient).pipe()
      }

      deletepatient(idP : number){
        return this.http.post<any>('http://localhost:8080/patient/delete/'+idP,{}).pipe()
      }

      updatepatient( idP:number,patient: Patient){
        return this.http.put<Patient>('http://localhost:8080/patient/update/'+idP,patient).pipe()
      }
    
      getbyid(idP : number){
        return this.http.get<Patient>('http://localhost:8080/patient/byid/'+idP).pipe()
      } 
    }
