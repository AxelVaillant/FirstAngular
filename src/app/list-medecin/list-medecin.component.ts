import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../service/medecin.service';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit {

  listMedecin : Medecin[] = [];
  constructor(private medecinService : MedecinService) { }

  ngOnInit(): void {
    this.medecinService.getAll().subscribe(
      data => {
        this.listMedecin = data;
      }
    )
  }
  deletemedecin(idmedecin : number){
    this.medecinService.deletemedecin(idmedecin).subscribe(
      data=>(
      console.log(data)
      )
    )

}
getbyid(idmedecin:number){
  this.medecinService.getbyid(idmedecin).subscribe(
    data=>(
      console.log(data)
    )
  )}

updateMedecin(idM:number , medecin:Medecin){
this.medecinService.updatemedecin(idM,medecin).subscribe(
data=>(
console.log(data)
)
)
}
}
