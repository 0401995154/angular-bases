import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name: string = 'ironman';
  edad: number = 45;


  get capitalizedname() {
    return this.name.toUpperCase();
  }

  getHeroeComplete(): string {
    return `${this.name} - ${this.edad}`;
  }

  changeHero() {
    this.name = 'Spiderman';
   
  }

  changeEdad() {
    this.edad = 35;
  }
}
