import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  onDeleteIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [];

  onDeleteCharacter(id?: string) {
    //si viene o no viene el id
    //si no viene nada me retorna 
    if (!id) return;
    console.log(id);
    this.onDeleteIndex.emit(id);
  }
}
