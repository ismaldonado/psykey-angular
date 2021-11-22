import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private readonly horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private readonly verticalPosition: MatSnackBarVerticalPosition = 'top';
  private readonly duration = 3;

  constructor(private readonly snackBar: MatSnackBar) {}

  openSnackBar(text: string): void {
    this.snackBar.open(text, 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration * 1000
    });
  }
}
