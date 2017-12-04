import { Component, OnInit } from '@angular/core';
import { Card, Suit, Value } from '../card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  public cards: Card[];

  constructor() { }

  ngOnInit() {
    this.cards = [
        new Card(Suit.Bell, Value.Ace),
        new Card(Suit.Rose, Value.Seven),
        new Card(Suit.Shield, Value.Jack),
        new Card(Suit.Bell, Value.Ace),
        new Card(Suit.Rose, Value.Seven),
        new Card(Suit.Bell, Value.Ace),
        new Card(Suit.Rose, Value.Seven),
        new Card(Suit.Shield, Value.Jack),
        new Card(Suit.Oak, Value.Queen)
    ];
  }

  onClicked(card) {
    console.log(card);
  }

}
