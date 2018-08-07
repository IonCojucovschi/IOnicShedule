import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EliteApi {
private BaseURL="https://elite-shedule-app-dfe49.firebaseio.com/";



  constructor(public http: Http) {
    console.log('Hello EliteApiProvider Provider');
  }

getTurnaments()
{
  return new Promise(resolve=>{this.http.get(`${this.BaseURL}/tournaments.json`).subscribe(res=>resolve(res.json()))
});
}


}
