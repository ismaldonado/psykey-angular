import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { AlertService } from '../service/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly loginService: LoginService,
              private readonly alertService: AlertService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): any {
    if (this.loginForm.valid) {
      this.loginService.login(this.getFormValue('username'), this.getFormValue('password'))
        .subscribe(() => this.router.navigate(['/dashboard']).then(() => this.alertService.openSnackBar('¡Conectado con exito!')));
    }
  }

  backWeb(): void {
    this.router.navigate(['/']).then();
  }

  private getFormValue(key: string): any {
    return this.loginForm.get(key)?.value;
  }
}
