import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-form-btn',
  imports: [CommonModule],
  templateUrl: './to-form-btn.html',
  styleUrl: './to-form-btn.scss',
})
export class ToFormBtn {
  @Input() btnName = 'Get in Touch';
  @Input() color = '#F8F9FA';
}
