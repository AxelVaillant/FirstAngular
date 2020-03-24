import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../service/medecin.service';
import Swal from 'sweetalert2';

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
        this.medecinService.deletemedecin(idmedecin).subscribe(
          data => {
          if( data == 0){
            
          }else if (data){
            Swal.fire(
              'Medecin supprimé!',
              "L'medecin a bien été supprimé !",
              'success'
            ).then(()=>
             window.location.href = "http://localhost:4200/medecin"
            )
      }
      })
      }

  }
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
