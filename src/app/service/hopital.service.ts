import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Hopital } from '../models/hopital';
@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private http:HttpClient) { }
  
  getAll(){
    return this.http.get<Hopital[]>('http://localhost:8080/hopital/all').pipe()
  }

  create(hopital : Hopital){
return this.http.post<Hopital>('http://localhost:8080/hopital/save',hopital).pipe()
  }

  deletehopital(idH : number){
    return this.http.post<any>('http://localhost:8080/hopital/delete/'+idH,{}).pipe()
  }
  updatehopital( idH:number,hopital: Hopital){
    return this.http.put<Hopital>('http://localhost:8080/hopital/update/'+idH,hopital).pipe()
  }

  getbyid(idH : number){
    return this.http.get<Hopital>('http://localhost:8080/hopital/byid/'+idH).pipe()
  }
}
