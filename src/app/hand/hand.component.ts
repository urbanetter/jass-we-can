import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {
  @Input() cards: Card[];

  @Output() playCard: EventEmitter<Card> = new EventEmitter<Card>();

  onClicked(card: Card) {
    this.playCard.emit(card);
  }
}
