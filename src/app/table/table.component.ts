import {Component, OnInit} from '@angular/core';
import { JassService } from '../jass.service';
import {Card} from '../card';
import {Game, Style} from "../game";
import {PlayedCards} from "../playedCards";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public chooseStyle: boolean;
  public state: string;
  public style: string;
  public trick: Card[];
  public hand: Card[];
  public teams: string;
  private nextTrick?: Card[];
  private trickNumber: number;

  constructor(private service: JassService) {
    this.chooseStyle = false;
    this.state = 'Loading...';
    this.style = 'To be set...';
    this.trick = [];
    this.hand = [];
  }

  ngOnInit() {
    this.service.getGame().subscribe((game) => this.handleGame(game));
  }

  newGame() {
    this.service.newGame().subscribe((game) => this.handleGame(game));
  }

  setStyle(style: Style) {
    this.service.setStyle(style).subscribe((game) => this.handleGame(game));
  }

  handleGame(game: Game) {
    if (game.style) {
      this.chooseStyle = false;
      this.style = game.style;
    } else {
      this.chooseStyle = true;
    }
    this.hand = game.hand;
    this.trick = game.trick;
    this.trickNumber = game.trickNumber;
    if (!game.ready) {
      this.state = 'Not ready';
    } else if (this.trickNumber <= 9) {
      this.state = 'Trick ' + this.trickNumber + ' out of 9';
    } else {
      this.state = 'Finished';
    }
    this.teams = '';
    game.teams.forEach((team) => {
      this.teams += team.points + ' points: ' + team.name + ' ';
    });
  }

  playCard(card: Card) {
    this.hand.splice(this.hand.indexOf(card), 1);
    this.service.playCard(card).subscribe((playedCards: PlayedCards) => this.handlePlayedCards(playedCards));
  }

  handlePlayedCards(playedCards: PlayedCards) {
    if (playedCards.lastTrick) {
      this.nextTrick = playedCards.trick;
      this.trick = playedCards.lastTrick;
    } else {
      this.nextTrick = null;
      this.trick = playedCards.trick;
    }
    this.teams = '';
    playedCards.teams.forEach((team) => {
      this.teams += team.points + ' points: ' + team.name + ' ';
    });
  }

  trickFinished() {
    if (this.nextTrick) {
      this.trick = this.nextTrick;
      this.nextTrick = null;
      this.trickNumber++;
      if (this.trickNumber <= 9) {
        this.state = 'Trick ' + this.trickNumber + ' out of 9';
      } else {
        this.state = 'Finished';
      }
    }
  }
}
