import { Component, signal } from '@angular/core';
import { ToFormBtn } from '../shared/to-form-btn/to-form-btn';
import { MenuHeader } from '../shared/menu-header/menu-header';

@Component({
  selector: 'app-section-title',
  imports: [ToFormBtn, MenuHeader],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitle {
  helloWorld = signal("Hello World");
  wasHovered: boolean = false;

  changeHW() {
    this.helloWorld.set("I'm Riccardo Schöpf");
  }

  resetHW() {
    setTimeout(() => {
      this.helloWorld.set("Hello World");
    }, 300);
  }
}
