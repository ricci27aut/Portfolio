import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { SectionTitle } from '../section-title/section-title';
import { SkillSet } from '../skill-set/skill-set';
import { Colleagues } from '../colleagues/colleagues';
import { Form } from '../form/form';
import { ProjectArea } from '../project-area/project-area';

@Component({
  selector: 'app-landing-page',
  imports: [AboutMe, SectionTitle, SkillSet, Colleagues, Form, ProjectArea],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
}
