import { Component, input, InputSignal } from '@angular/core';
import { Monsters } from '../../models/monsters.models';

@Component({
  selector: 'app-playing-cards',
  templateUrl: './playing-cards.component.html',
  styleUrls: ['./playing-cards.component.css']
})
export class PlayingCardsComponent {

 monster: InputSignal<Monsters> = input(
                    new Monsters(),
                    {
                      alias: 'my-monster'
                    }
                    );  
}
