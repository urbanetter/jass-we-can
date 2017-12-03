import { Component, OnInit } from '@angular/core';
import {Card, Suit, Value } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card;

  constructor() { }

  ngOnInit() {
    this.card = new Card(Suit.Bell, Value.King);
  }

}
