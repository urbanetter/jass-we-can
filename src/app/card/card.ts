export enum Suit {
    Oak = 'oak',
    Shield = 'shield',
    Bell = 'bell',
    Rose = 'rose'
}
export enum Value {
    Six = 'six',
    Seven = 'seven',
    Eight = 'eight',
    Nine = 'nine',
    Ten = 'ten',
    Jack = 'jack',
    Queen = 'queen',
    King = 'king',
    Ace = 'ace'
}

export class Card {
    constructor(public suit: Suit, public value: Value) {}
}
