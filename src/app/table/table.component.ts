import {Component, OnInit} from '@angular/core';
import { JassService } from '../jass.service';
import {Card} from '../card';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public hand: Card[];

  constructor(private service: JassService) {
    this.hand = [];
  }
;
  ngOnInit() {
    this.service.getGame().subscribe((game) => this.hand = game.hand);
  }

}
