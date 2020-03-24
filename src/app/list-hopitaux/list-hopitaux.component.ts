import { Component, OnInit } from '@angular/core';
import {HopitalService} from '../service/hopital.service'
import { Hopital } from '../models/hopital';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})
export class ListHopitauxComponent implements OnInit {

  listHopitaux : Hopital[] = [];
 // hopital : Hopital = new Hopital();
  constructor(private hopitalService : HopitalService) { }

  ngOnInit(): void {

   this.hopitalService.getAll().subscribe(
     data => {
       this.listHopitaux = data;
     }
   ) 
  }

  deletehopital(idhopital : number){
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
        this.hopitalService.deletehopital(idhopital).subscribe(
          data => {
          if( data == 0){
            
          }else if (data){
            Swal.fire(
              'Hopital supprimé!',
              "L'hopital a bien été supprimé !",
              'success'
            ).then(()=>
             window.location.href = "http://localhost:4200/hopital"
            )
      }
      })
      }

  }
)
}
        
    getbyid(idhopital:number){
      this.hopitalService.getbyid(idhopital).subscribe(
        data=>(
          console.log(data)
        )
      )}

updateHopital(idH:number , hopital:Hopital){
  this.hopitalService.updatehopital(idH,hopital).subscribe(
    data=>(
    console.log(data)
    )
  )
}

}



