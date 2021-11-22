import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../service/storage/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  apiText = 'Iniciar sesión';

  constructor(private readonly sessionStorageService: SessionStorageService,
              private readonly router: Router) {}

  ngOnInit(): void {
    this.subscribeIsLogin();
  }

  goDashboard($event: Event): void {
    $event.preventDefault();
    if (this.isLogin) {
      this.router.navigate(['/dashboard']).then();
    } else {
      this.router.navigate(['/login']).then();
    }
  }

  private subscribeIsLogin(): void {
    this.sessionStorageService.select('authToken').subscribe((token: string) => {
      this.isLogin = !!token;
      this.apiText = this.isLogin ? 'Administrador' : 'Iniciar sesión';
    });
  }
}
