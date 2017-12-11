import {Card} from './card';

export class PlayedCards {
    public trick: Card[];
    public lastTrick?: Card[];
    public hint?: Card;
    public hintReason?: string;
}
