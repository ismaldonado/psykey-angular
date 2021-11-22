import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone, faSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  instagramIcon = faInstagram;
  twitterIcon = faTwitter;
  facebookIcon = faFacebook;
  phoneIcon = faPhone;
  envelopeIcon = faEnvelope;
  markerAltIcon = faMapMarkerAlt;
  squareIcon = faSquare;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
    config.showNavigationArrows = true;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
