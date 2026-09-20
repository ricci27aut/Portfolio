import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { SectionTitle } from '../section-title/section-title';

@Component({
  selector: 'app-landing-page',
  imports: [AboutMe, SectionTitle],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
}
