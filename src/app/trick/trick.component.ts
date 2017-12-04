import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {Card, Suit, Value} from '../card';

@Component({
  selector: 'app-trick',
  templateUrl: './trick.component.html',
  styleUrls: ['./trick.component.css']
})
export class TrickComponent implements OnInit {

  topLeft: Player;
  topRight: Player;
  bottomLeft: Player;
  bottomRight: Player;

  ngOnInit() {
    this.topLeft = new Player('Ueli');
    this.topRight = new Player('Hans');
    this.bottomLeft = new Player('Fritz');
    this.bottomRight = new Player('Sepp');

    this.topLeft.card = new Card(Suit.Rose, Value.Ace);
  }

}
