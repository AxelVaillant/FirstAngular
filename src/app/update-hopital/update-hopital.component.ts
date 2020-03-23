import { Component, OnInit } from '@angular/core';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../service/hopital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-hopital',
  templateUrl: './update-hopital.component.html',
  styleUrls: ['./update-hopital.component.css']
})
export class UpdateHopitalComponent implements OnInit {
  hopital : Hopital = new Hopital();
  idhopitalURL:number
  constructor(private hopitalservice : HopitalService,private route:ActivatedRoute) { 
this.idhopitalURL =parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
console.log(this.idhopitalURL);
this.hopitalservice.getbyid(this.idhopitalURL).subscribe(
  data=>(
    this.hopital=data
  ))
  }

  getbyid(idH:number){
  this.hopitalservice.getbyid(idH).subscribe(
    data=>(
      console.log(data)
    )
  )}
  updateHopital(idH:number , hopital:Hopital){
    this.hopitalservice.updatehopital(idH,hopital).subscribe(
      data=>(
      console.log(data)
      )
    )
  }
}
