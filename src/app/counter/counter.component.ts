import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input()
  listapersonas: String[] = [];

  counter = 0;

  incrementa() {
    this.counter++;
  }

  decrementa() {
    this.counter--;
  }

  limpiar() {
    this.counter = 0;
  }
}
