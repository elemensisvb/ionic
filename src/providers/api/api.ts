import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class ApiProvider {
  apiURL: any;
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
    this.apiURL = 'http://admin-sgdevel.ordermate.online/clients/omotravel/wp-json/wp/v2';
  }
  // to get list of blog data
  getList() {
    return this.http.get(this.apiURL + '/posts?order=asc').map(res => res);
  }
  getComments(postID) {
    return this.http.get(this.apiURL + '/comments?post='+postID).map(res => res);
  }

}
