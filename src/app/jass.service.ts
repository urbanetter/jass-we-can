import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game, Style} from './game';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {Card} from "./card";
import {PlayedCards} from "./playedCards";

@Injectable()
export class JassService {

  constructor(private http: HttpClient) { }

  getGame(): Observable<Game> {
    let observable: Observable<Game>;
    if (localStorage.getItem('game-id')) {
      observable = this.http.get<Game>(environment.jassyUrl + localStorage.getItem('game-id'));
    } else {
      observable = this.http.post<Game>(environment.jassyUrl, []);
    }
    return observable.pipe(
        tap(game => localStorage.setItem('game-id', game.id))
    );
  }

  newGame(): Observable<Game> {
    return this.http.post<Game>(environment.jassyUrl, {}).pipe(
      tap(game => localStorage.setItem('game-id', game.id))
    );
  }

  setStyle(style: Style): Observable<Game> {
    return this.http.post<Game>(environment.jassyUrl + localStorage.getItem('game-id') + '/style', {style: style});
  }

  playCard(card: Card): Observable<PlayedCards> {
    return this.http.post<PlayedCards>(environment.jassyUrl + localStorage.getItem('game-id'), {card: card});
  }
}
