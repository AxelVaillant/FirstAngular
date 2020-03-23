import { Component, OnInit } from '@angular/core';
import {HopitalService} from '../service/hopital.service'
import { Hopital } from '../models/hopital';
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
    this.hopitalService.deletehopital(idhopital).subscribe(
      data=>(
      console.log(data)
      )
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
