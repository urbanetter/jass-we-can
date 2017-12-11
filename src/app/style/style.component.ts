import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Style} from '../game';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {

  @Output() chooseStyle: EventEmitter<Style> = new EventEmitter<Style>();

  setStyle(style: Style) {
    this.chooseStyle.emit(style);
  }

}
