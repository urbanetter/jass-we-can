import {Card} from './card';
import {Team} from './team';

export class PlayedCards {
    public trick: Card[];
    public teams: Team[];
    public lastTrick?: Card[];
    public hint?: Card;
    public hintReason?: string;
}
