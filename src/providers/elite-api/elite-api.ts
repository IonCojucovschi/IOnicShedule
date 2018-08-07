import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EliteApi {

  constructor(public http: HttpClient) {
    console.log('Hello EliteApiProvider Provider');
  }

}
