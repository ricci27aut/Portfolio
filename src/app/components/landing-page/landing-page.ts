import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

  helloWorld: string = "Hello World";


  changeHW(){
    this.helloWorld = "I'm Riccardo Schöpf";
  }
}
