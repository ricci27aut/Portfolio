import { Component, OnInit } from '@angular/core';
import { MenuHeader } from '../shared/menu-header/menu-header';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';
import { projektsData } from '../data/projekts.data/projekts.data';

@Component({
  selector: 'app-project-ditails',
  imports: [MenuHeader, CommonModule, RouterModule, ToFormBtn],
  templateUrl: './project-ditails.html',
  styleUrl: './project-ditails.scss',
})
export class ProjectDitails implements OnInit {
 constructor(private route: ActivatedRoute) {}
  projekts = projektsData;

  projectIndex: number = 0;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    for (let i = 0; i < projektsData.length; i++) {
      if (projektsData[i].id === id) {
        this.projectIndex = i;
        break;
      }
    }
  }

  nextProject():void {
    this.projectIndex = this.projectIndex + 1;

    if (this.projectIndex >= projektsData.length) {
      this.projectIndex = 0;
    }

  }
}
