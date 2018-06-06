import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'lib-snackbar-example',
  templateUrl: './snackbar-example.component.html',
  styleUrls: ['./snackbar-example.component.css']
})
export class SnackbarExampleComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

} 
