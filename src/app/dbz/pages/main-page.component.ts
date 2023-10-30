import { Character } from './../interfaces/character.inteface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainComponent {
  characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    { 
      name: 'Goku',
      power: 9500,
    },
  ];
}
