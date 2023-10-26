import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Thor', 'Loki', 'Ironman', 'Hulk', 'Wanda'];

  delhero?: string = '';
  deleteHeroe() {
    this.delhero = this.heroes.pop();
  }
}
