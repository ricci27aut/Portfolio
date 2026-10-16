import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-header.html',
  styleUrls: ['./menu-header.scss', './menu-heder-mobile.scss'],
})
export class MenuHeader {
    language = signal("de");
}
