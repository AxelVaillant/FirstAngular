import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../service/hopital.service';
import { Hopital } from '../models/hopital';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-hopital',
  templateUrl: './create-hopital.component.html',
  styleUrls: ['./create-hopital.component.css']
})
export class CreateHopitalComponent implements OnInit {
  newHopital : Hopital = new Hopital() // Pour stocker les infos du formulaire

  constructor(private hopitalservice : HopitalService) { }

  ngOnInit(): void {
  }
  createHopital(){
    this.hopitalservice.create(this.newHopital).subscribe(
      data => {
      if( data['idhopital'] == 0){
        
      }else if (data['idhopital']){
        Swal.fire(
          'Hopital ajouté!',
          this.newHopital.nomhopital +' a bien été ajouté !',
          'success'
        ).then(()=>
         window.location.href = "http://localhost:4200/hopital"
        )
      }
    })
  }
}
