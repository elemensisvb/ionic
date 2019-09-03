import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { BlogdetailPage } from '../blogdetail/blogdetail';
import { ApiProvider } from '../../providers/api/api';
import { IamgesProvider } from '../../providers/iamges/iamges';
import * as _ from 'lodash';

/**
 * Generated class for the BloglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloglist',
  templateUrl: 'bloglist.html',
})
export class BloglistPage {

  loading: any;
  bloglist: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public api: ApiProvider,
    public toastCtrl: ToastController,
    public imgService: IamgesProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloglistPage');
    this.getBlogList()
  }
  openBlogDetail(blog) {
    // this.navCtrl.push('BlogdetailPage');
    this.navCtrl.push('BlogdetailPage', {
      blogData: blog
    });
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  // to add images to each object of list
  async addImages(data) {
    let matchFound;
    await this.imgService.getLocalData().subscribe((res) => {
      _.forEach(data, async function(blog) {
        blog.excerpt.rendered = blog.excerpt.rendered.replace(/<\/?[^>]+>/gi, "");
        matchFound = await _.find(res, function(r) {
          return blog.slug == r.slug;
        })
        if (matchFound) {
          blog.image = matchFound.image;
        } else {
          blog.image = '../../assets/imgs/home_2.png'
        }
      });
      this.bloglist = data;
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

  // to get blog data from api service
  getBlogList() {
    this.presentLoading();
    this.api.getList().subscribe((res) => {
      this.addImages(res);
    },
      err => {
        this.presentToast(err.error.message);
        this.loading.dismiss();
        console.log(err.error.message);
        this.navCtrl.push('HomePage');
      }
    );
  }

}
