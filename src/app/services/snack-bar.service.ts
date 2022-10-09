import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private matSnackBar: MatSnackBar) { }

  show(message: string, action: string = 'OK',
    hPosition?: any, vPosition?: any,
    className?: any) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: hPosition ? hPosition : 'center',
      verticalPosition: vPosition ? vPosition : 'bottom',
      panelClass: className
      // direction: "rtl"
    });
  }
}
