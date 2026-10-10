import { Component } from '@angular/core';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';
import { CommonModule } from '@angular/common';
import { Footer } from '../shared/footer/footer';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ToFormBtn, CommonModule, Footer, RouterModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  placeholderNameInput: string = 'Enter your name';
  placeholderEmailInput: string = 'Enter your email';
  placeholderMessageInput: string = 'Enter your message';

  whichInput: number = 0;
  privecy: boolean = false;
  privacyAlertShown: boolean = false;

  name: string = '';
  email: string = '';
  message: string = '';

  checkInput() {
    if (!this.privecy) {
      this.privacyAlertShown = true;
      return;
    }

    this.clearInput();
  }

  clearInput() {
    this.name = '';
    this.email = '';
    this.message = '';

    this.privecy = false;
    this.privacyAlertShown = false;
  }
}
