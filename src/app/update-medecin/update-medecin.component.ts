import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../service/medecin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  medecin : Medecin = new Medecin();
  idmedecinURL:number
  constructor(private medecinservice : MedecinService,private route:ActivatedRoute) { 
    this.idmedecinURL =parseInt(this.route.snapshot.paramMap.get('id'));
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
        data=>(
        console.log(data)
        )
      )
    }

}
