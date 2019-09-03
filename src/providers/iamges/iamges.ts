import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the IamgesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IamgesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IamgesProvider Provider');
  }
  // to get images from local JSON file
  getLocalData() {
    return this.http.get('../assets/images.json').map(res => res);
  }

}
