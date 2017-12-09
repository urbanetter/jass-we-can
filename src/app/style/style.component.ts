import {Component, Input, OnInit} from '@angular/core';
import {JassService} from '../jass.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {

  constructor(private service: JassService) { }

  setStyle(style) {
    this.service.setStyle(style).subscribe(game => console.log('Set style to ', style));
  }

}
