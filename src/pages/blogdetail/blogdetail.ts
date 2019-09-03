import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import * as _ from 'lodash';


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
  commentDatas: any;
  commentLength: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public api: ApiProvider,
    public toastCtrl: ToastController
  ) {
    this.blogDatas = navParams.get('blogData');
    this.blogDatas.content.rendered = this.blogDatas.content.rendered.replace(/<\/?[^>]+>/gi, "");
    this.blogDatas.openComment = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogdetailPage');
    this.getCommentsList();
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }
  // to get comments from api service
  getCommentsList() {
    this.presentLoading();
    this.api.getComments(this.blogDatas.id).subscribe((res) => {
      this.commentDatas = res;
      this.commentLength = this.commentDatas.length;
      _.forEach(this.commentDatas,function(cmt){
        cmt.content.rendered = cmt.content.rendered.replace(/<\/?[^>]+>/gi, "")
      });
      this.loading.dismiss();
    },
      err => {
        this.presentToast(err.error.message);
        this.loading.dismiss();
        console.log(err.error.message);
        this.navCtrl.push('HomePage');
      }
    );
  }
// TO SHOW COMMENTS
  showComments(show) {
    this.blogDatas.openComment = !show;
  }

}
