import { DragonballzService } from '../services/dragonballz.service';
import { Character } from './../interfaces/character.inteface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainComponent {
  constructor ( public dbzServices: DragonballzService) {
  }
}
