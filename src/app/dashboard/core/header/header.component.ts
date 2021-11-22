import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../service/storage/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(private readonly sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    this.userName = this.sessionStorageService.get('accessInfo').userFullName;
  }
}
