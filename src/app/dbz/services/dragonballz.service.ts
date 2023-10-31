import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DragonballzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];

  onNewCharacter(persona: Character) {
    console.log('Main page');

    // this.characters.push(persona);
    this.characters.push({
      id: uuid(),
      ...persona,
    });
    console.log(persona);
  }

  // onDeleteIndex(index: number) {
  //   console.log('Padre');
  //   this.characters.splice(index, 1);
  //   alert('Se elimino con éxito');
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
    console.log(this.characters);
  }
}
