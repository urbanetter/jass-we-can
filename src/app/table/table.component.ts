import {Component, OnInit} from '@angular/core';
import { JassService } from '../jass.service';
import {Game} from "../game";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public game: Game;

  constructor(private service: JassService) {
    this.game = {};
  }
;
  ngOnInit() {
    this.service.getGame().subscribe((game) => this.game = game);
  }

}
