import { Component } from '@angular/core';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';

@Component({
  selector: 'app-section-title',
  imports: [ToFormBtn],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitle {
   helloWorld: string = "Hello World";

  changeHW(){
    this.helloWorld = "I'm Riccardo Schöpf";
  }
}
