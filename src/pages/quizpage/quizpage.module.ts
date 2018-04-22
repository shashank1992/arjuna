import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizpagePage } from './quizpage';

@NgModule({
  declarations: [
    QuizpagePage,
  ],
  imports: [
    IonicPageModule.forChild(QuizpagePage),
  ],
})
export class QuizpagePageModule {}
