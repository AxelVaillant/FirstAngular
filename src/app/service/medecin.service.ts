import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Medecin } from '../models/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http:HttpClient ) { }

  getAll(){
    return this.http.get<Medecin[]>('http://localhost:8080/medecin/all').pipe()
  }
  create(medecin : Medecin){
    return this.http.post<Medecin>('http://localhost:8080/medecin/save',medecin).pipe()
      }
 
      
      deletemedecin(idM : number){
        return this.http.post<any>('http://localhost:8080/medecin/delete/'+idM,{}).pipe()
      }  
      updatemedecin( idM:number,medecin: Medecin){
        return this.http.put<Medecin>('http://localhost:8080/medecin/update/'+idM,medecin).pipe()
      }
    
      getbyid(idM : number){
        return this.http.get<Medecin>('http://localhost:8080/medecin/byid/'+idM).pipe()
      }  
}
