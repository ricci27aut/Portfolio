import { Component} from '@angular/core';
import { ToFormBtn } from '../to-form-btn/to-form-btn';
import { CommonModule } from '@angular/common';
import { projektsData } from '../../data/projekts.data/projekts.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projekts',
  imports: [ToFormBtn, CommonModule, RouterLink],
  templateUrl: './projekts.html',
  styleUrl: './projekts.scss',
})
export class Projekts {
  projekts = projektsData;
}
