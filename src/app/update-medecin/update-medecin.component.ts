import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../service/medecin.service';
import { ActivatedRoute } from '@angular/router';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../service/hopital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  medecin : Medecin = new Medecin();
  listHopitaux : Hopital[] = [];
  idmedecinURL:number
  constructor(private medecinservice : MedecinService,private route:ActivatedRoute,private hopitalService : HopitalService) { 
    this.idmedecinURL =parseInt(this.route.snapshot.paramMap.get('id'));
    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    ) 
  }

  ngOnInit(): void {
    console.log(this.idmedecinURL);
this.medecinservice.getbyid(this.idmedecinURL).subscribe(
  data=>(
    this.medecin=data
  ))
  }
  
  getbyid(idM:number){
    this.medecinservice.getbyid(idM).subscribe(
      data=>(
        console.log(data)
      )
    )}
    updateMedecin(idM:number , medecin:Medecin){
      this.medecinservice.updatemedecin(idM,medecin).subscribe(
        data=>{
          if( data['idmedecin'] == 0){
            
          }else if (data['idmedecin']){
            Swal.fire(
              'Medecin modifié!',
              "Le medecin n°"+this.medecin.idmedecin +' a bien été modifié !',
              'success'
            ).then(()=>
             window.location.href = "http://localhost:4200/medecin"
            )
          }
        }
      )
    }
    compareFn(hopital1: Hopital, hopital2: Hopital) {
      return hopital1 && hopital2 ? hopital1.idhopital === hopital2.idhopital : hopital1 === hopital2;
  }
}
