import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
/**
 * Generated class for the ChapterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-detail',
  templateUrl: 'chapter-detail.html',
})
export class ChapterDetailPage {
item:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,item:Items) {
  this.item = navParams.get('item') || item.defaultItem;
  }

 openItem(item) {
    this.navCtrl.push('QuizpagePage',{item:item} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterDetailPage');
  }

}

