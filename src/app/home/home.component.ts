import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flightName: any;
  from:String;
  to:String;
  depart:Date;
  return:Date;
  passengers:number;
  children:number;


  constructor(private appservice:AppserviceService) { }

  ngOnInit() {
  }

 /*submit(){
this.appservice.getFlightDetails(this.from).subscribe(
  result=> {
    console.log('success',result);
    this.flightName= result.flightName;
  },err=>{
    console.log('Failure');
  }
)
 }*/
}
