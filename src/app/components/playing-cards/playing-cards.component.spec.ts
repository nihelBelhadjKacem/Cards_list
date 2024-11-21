import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardsComponent } from './playing-cards.component';

describe('PlayingCardsComponent', () => {
  let component: PlayingCardsComponent;
  let fixture: ComponentFixture<PlayingCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingCardsComponent]
    });
    fixture = TestBed.createComponent(PlayingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
