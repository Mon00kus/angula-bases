
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponent {
  constructor() { }

  public title: string = 'Beggining Angular Course';
  public counter: number = 10;

  incriseBy(value:number): void{
      this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }

}
