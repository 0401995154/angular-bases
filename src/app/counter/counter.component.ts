import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

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
