import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';

/**
 * Generated class for the QuizpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizpage',
  templateUrl: 'quizpage.html',
})
export class QuizpagePage {
item:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,item:Items) {
  this.item = navParams.get('item') || item.defaultItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizpagePage');
  }

}
