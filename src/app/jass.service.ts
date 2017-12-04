import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from './game';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

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
}
