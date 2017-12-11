import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from '../card';

@Component({
  selector: 'app-trick',
  templateUrl: './trick.component.html',
  styleUrls: ['./trick.component.css']
})
export class TrickComponent {

  @Input() cards: Card[];
  @Output() finished = new EventEmitter();

  onClick() {
    this.finished.emit();
  }
}
