import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';
import { Monsters } from './models/monsters.models';

@NgModule({
  declarations: [
    AppComponent,
    PlayingCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
