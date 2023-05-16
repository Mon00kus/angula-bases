import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  constructor() { }

  public heroNames: string[] = ['Spiderman','Iroman','Hulk','Tork','Mistery']

  public deletedHero?: string;

  removeLastHero():void{

    this.deletedHero = this.heroNames.pop();

    /* console.log(deletedHero); */

  }
}
