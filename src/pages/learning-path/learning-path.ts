import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LearningPathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-path',
  templateUrl: 'learning-path.html',
})
export class LearningPathPage {
	chapters:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.chapters = [
  		{title:'chapter 1',image:'assets/imgs/chapter1.jpg'},
  		{title:'chapter 2',image:'assets/imgs/chapter2.jpg'},
  		{title:'chapter 3',image:'assets/imgs/chapter3.jpg'},
  		{title:'chapter 4',image:'assets/imgs/chapter4.jpg'},
  		{title:'chapter 5',image:'assets/imgs/chapter5.jpg'}

  	];
  }

  openItem(item) {
    this.navCtrl.push('ChapterDetailPage',{item:item} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPathPage');
  }

}
