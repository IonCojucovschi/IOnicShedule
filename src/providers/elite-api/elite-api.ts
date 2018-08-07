import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EliteApi {
private BaseURL="https://elite-shedule-app-dfe49.firebaseio.com/";
private CurentTurney:any={};


  constructor(public http: Http) {
    console.log('Hello EliteApiProvider Provider');
  }

getTurnaments()
{
  return new Promise(resolve=>{this.http.get(`${this.BaseURL}/tournaments.json`).subscribe(res=>resolve(res.json()))
});
}

getTuramentData(turnamentID):Observable<any>
{
  return this.http.get(`${this.BaseURL}/tournaments-data/${turnamentID}.json`)
  .map(responese=>{
    this.CurentTurney=responese.json();
    return this.CurentTurney;
  });
}

getCurentTureny()
{
  return this.CurentTurney;
}




}
