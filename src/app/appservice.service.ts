import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }

getFlightDetails(from:String){
  return this.http.post('http://localhost:8080/airways/getFlightDetails',{
    'commonRequest' : {
      'trasactionId' : 'getmarbeldetails : 16JUne',
      'userName' : 'Admin',
      'passWord' : 'Passowrd'
    },
    'from' : from
  });
  }
}
