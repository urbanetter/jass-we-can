import {Card} from './card';

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
    public trickCards: Card[];
    public handCards: Card[];
}
