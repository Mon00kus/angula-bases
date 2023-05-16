import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  constructor() { }

  public name='iroman!!!';
  public age = 50;

  get capitalizedName(): string {// no son mas que metodos que son usados como propiedades de la clase
      return this.name;
  }
  getHeroDescription(): string {
    return `${this.name.toUpperCase() }--${this.age}`;
  }
  changeHeroName(): void {
    this.name = 'Spiderman';
  }
  changeHeroAge(): void {
    this.age = 100;
  }
  resetForm(): void {
    this.name = 'iroman!!!';
    this.age = 50;
/*     document.querySelector('h1')!.innerHTML = '<h1>Desde angular</h1>'; */
/*    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>';
   });*/
  }
}
