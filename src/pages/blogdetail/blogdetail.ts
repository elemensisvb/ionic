import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blogdetail',
  templateUrl: 'blogdetail.html',
})
export class BlogdetailPage {

  blogDatas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.blogDatas = navParams.get('blogData');
    this.blogDatas.content.rendered = this.blogDatas.content.rendered.replace(/<\/?[^>]+>/gi, "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogdetailPage');
  }

}
