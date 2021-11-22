import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../service/storage/session-storage.service';
import { AccessInfo } from '../../model/access-info';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  accessInfo: AccessInfo;

  constructor(private readonly sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    this.accessInfo = this.sessionStorageService.get('accessInfo');
  }
}
