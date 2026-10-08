import { Component } from '@angular/core';
import { MenuHeader } from '../shared/menu-header/menu-header';
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
export class ProjectDitails { 
  projekts = projektsData;
}
