import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BloglistPage } from '../bloglist/bloglist';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openBlogList() {
    this.navCtrl.push('BloglistPage');
  }

}
