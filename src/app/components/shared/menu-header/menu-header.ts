import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.scss',
})
export class MenuHeader {
    language = signal("de");
}
