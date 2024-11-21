import { Component, Input } from '@angular/core';
import { Monsters } from '../../models/monsters.models';

@Component({
  selector: 'app-playing-cards',
  templateUrl: './playing-cards.component.html',
  styleUrls: ['./playing-cards.component.css']
})
export class PlayingCardsComponent {

  @Input() monster: Monsters= new Monsters();  
}
