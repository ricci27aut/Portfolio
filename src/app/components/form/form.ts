import { Component } from '@angular/core';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ToFormBtn, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
placeholderNameInput: string = 'Enter your name';
placeholderEmailInput: string = 'Enter your email';
placeholderMessageInput: string = 'Enter your message';

whichInput: number = 0;
}
