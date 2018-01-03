import {Card} from './card';
import {Team} from './team';

export enum Style {
    TrumpOak = 'trump oak',
    TrumpShield = 'trump shield',
    TrumpBell = 'trump bell',
    TrumpRose = 'trump rose',
    TopDown = 'top down',
    BottumUp = 'bottom up'
}

export class Game {
    public id: string;
    public style?: Style;
    public trick?: Card[];
    public hand: Card[];
    public ready: boolean;
    public trickNumber: number;
    public teams: Team[];
}
