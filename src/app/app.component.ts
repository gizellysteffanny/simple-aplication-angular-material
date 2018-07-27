import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  answer: string;
  answerDisplay: string;

  showSpinner: boolean;
  otherTheme: boolean;

  constructor() {
    this.answer = '';
    this.answerDisplay = '';

    this.showSpinner = false;
    this.otherTheme = false;
  }

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }
}
