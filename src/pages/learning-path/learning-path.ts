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
  		{title:'Time and Management',image:'assets/imgs/chapter1.jpg',index:0},
  		{title:'Planning and prioritizing',image:'assets/imgs/chapter2.jpg',index:1},
  		{title:'Procrastination',image:'assets/imgs/chapter3.jpg',index:2},
  		{title:'Goals',image:'assets/imgs/chapter4.jpg',index:3},
  		{title:'Endless Motivation',image:'assets/imgs/chapter5.jpg',index:4}

  	];
  }

  openItem(item) {
    this.navCtrl.push('ChapterDetailPage',{item:item} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPathPage');
  }

}
