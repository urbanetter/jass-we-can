import {Component, Input} from '@angular/core';
import {Game} from '../game';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{

  @Input() game: Game;

}
