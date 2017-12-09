import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {
  @Input() cards: Card[];
  constructor() { }

  onClicked(card) {
    console.log(card);
  }

}
