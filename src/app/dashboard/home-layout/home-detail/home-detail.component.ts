import { Component, Input } from '@angular/core';
import { AccessInfo } from '../../../model/access-info';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent {
  @Input() accessInfo: AccessInfo;
}
