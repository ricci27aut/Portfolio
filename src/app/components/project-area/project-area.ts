import { Component } from '@angular/core';
import { Projekts } from '../shared/projekts/projekts';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';
import { CommonModule } from '@angular/common';
import { projektsData } from '../data/projekts.data/projekts.data'; 

@Component({
  selector: 'app-project-area',
  imports: [Projekts, ToFormBtn, CommonModule],
  templateUrl: './project-area.html',
  styleUrl: './project-area.scss',
})
export class ProjectArea {
  projekts = projektsData;
}
