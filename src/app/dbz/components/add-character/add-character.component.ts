import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  persona: Character = {  name: '', power: 0 };

  /* Se emite del hijo al padre */
  emitCharacter() {
    if (this.persona.name.length == 0) {
      return;
    }
    console.log(this.persona);
    this.onNewCharacter.emit(this.persona);
    this.persona.name = '';
    this.persona.power = 0;
  }
}
