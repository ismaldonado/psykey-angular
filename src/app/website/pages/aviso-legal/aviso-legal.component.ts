import { Component } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})
export class AvisoLegalComponent {
  squareIcon = faSquare;
}
