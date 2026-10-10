import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeader } from '../menu-header/menu-header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, MenuHeader, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
