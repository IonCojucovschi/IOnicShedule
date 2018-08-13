import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EliteApi {
private BaseURL="https://elite-shedule-app-dfe49.firebaseio.com/";
private CurentTurney:any;
private tourneyData={};

  constructor(public http: Http) {
    console.log('Hello EliteApiProvider Provider');
  }

getTurnaments()
{
  return new Promise(resolve=>{this.http.get(`${this.BaseURL}/tournaments.json`).subscribe(res=>resolve(res.json()))
});
}

// getTuramentData(turnamentID):Observable<any>
// {
//   return this.http.get(`${this.BaseURL}/tournaments-data/${turnamentID}.json`)
//   .map(responese=>{
//     this.CurentTurney=responese.json();
//     console.log("is curent turney initialized value= ",this.CurentTurney);
//     return this.CurentTurney;
//   });
// }

getCurentTureny()
{
  return this.CurentTurney;
}

getTuramentData(tourneyId,forceRefresh:boolean=false):Observable<any>
{
  if(!forceRefresh && this.tourneyData[tourneyId])
  {
    this.CurentTurney=this.tourneyData[tourneyId];
    console.log("no need to make http call , just return the data");
    return Observable.of(this.CurentTurney);
  }
  
   ///don't have datat yet
   console.log("** about to make http call");
   return this.http.get(`${this.BaseURL}/tournaments-data/${tourneyId}.json`)
   .map(response=>{
     this.tourneyData[tourneyId]=response.json();
     this.CurentTurney=this.tourneyData[tourneyId];
     return this.CurentTurney;

   });
}


refreshCurrentTourney()
{
 return this.getTuramentData(this.CurentTurney.tournament.id,true);
}



}
