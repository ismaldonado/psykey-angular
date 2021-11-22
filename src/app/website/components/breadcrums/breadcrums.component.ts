import { Component, Input } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent {
  @Input() text: string | undefined;
  @Input() section?: string;
  angleDoubleRight = faAngleDoubleRight;
}
