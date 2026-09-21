import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  imports: [CommonModule],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Angular' },
    { name: 'Firebase' },
    { name: 'Superbase' },
    { name: 'Git' },
    { name: 'REST-API' },
    { name: 'Scrum' },
    { name: 'Material Design' },
    { name: 'Vue' },
  ];

  isPulledOver: boolean = false;

  animation(){
    if (this.isPulledOver) {
      this.isPulledOver = false;
    } else {
      this.isPulledOver = true;
    }

  }
}
