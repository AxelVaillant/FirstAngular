import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../service/medecin.service';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../service/hopital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-medecin',
  templateUrl: './create-medecin.component.html',
  styleUrls: ['./create-medecin.component.css']
})
export class CreateMedecinComponent implements OnInit {
  listHopitaux : Hopital[] = [];
  newMedecin : Medecin = new Medecin()
  constructor(private medecinservice : MedecinService, private hopitalService : HopitalService) { }

  ngOnInit(): void {
    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    ) 
  }
  createMedecin(){
    this.medecinservice.create(this.newMedecin).subscribe(
      data=>{
        if( data['idmedecin'] == 0){
          
        }else if (data['idmedecin']){
          Swal.fire(
            'Medecin ajouté!',
            this.newMedecin.nommedecin +' a bien été ajouté !',
            'success'
          ).then(()=>
           window.location.href = "http://localhost:4200/medecin"
          )
        }
      }
    )
    
  }
}
