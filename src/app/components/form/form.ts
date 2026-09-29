import { Component } from '@angular/core';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';
import { CommonModule } from '@angular/common';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-form',
  imports: [ToFormBtn, CommonModule, Footer],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
placeholderNameInput: string = 'Enter your name';
placeholderEmailInput: string = 'Enter your email';
placeholderMessageInput: string = 'Enter your message';

whichInput: number = 0;
}
