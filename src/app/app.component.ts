import { Component } from '@angular/core';
import { Monsters } from './models/monsters.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playing-cards';
  monster1!: Monsters;
  constructor () {
    this.monster1 = new Monsters();
    this.monster1.name = "Pik";
    this.monster1.hp = 46;
    this.monster1.figureCaption = "N°002 Pik";
    this.monster1.description = "this is a long deescription";
    this.monster1.damage = 34;
    this.monster1.capacityName = "stradard attack";
  }
}
