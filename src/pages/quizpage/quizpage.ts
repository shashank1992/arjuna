import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

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
@ViewChild(Slides) slides:Slides;
item:any[];
quiz_ques : any;
quiz_questions:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,item:Items) {
  this.item = navParams.get('item') || item.defaultItem;
  this.quiz_ques = "{\"quiz\":{},\"questions\":[{\"a\":\"1 added 39 times\",\"b\":\"1 + 1 + 1 ……. 39 times\",\"c\":\"1 × 30 =\",\"d\":\"1 * 15 =\"},{\"a\":\"10 added 19 times\",\"b\":\"10 + 10 + 10 ……… 17 times\",\"c\":\"10 × 4\",\"d\":\"1 * 15 =\"},{\"a\":\"5 added 15 times\",\"b\":\"5 + 5 + 5 ………. 16 times\",\"c\":\"5 × 17\",\"d\":\"1 * 15 =\"}]}";
  this.quiz_questions = JSON.parse(this.quiz_ques).questions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizpagePage');
  }

   itemSelected(item: string,index: number) {
    console.log("Selected Item", item,index);
    //check for the right answer logic index for slide. 

    if(item==this.quiz_questions[index].a) {
    	console.log('correct answer');
    }

    //navigate to next question on select 

   
    this.slides.slideTo(index+1 , 200);
  

}

}
