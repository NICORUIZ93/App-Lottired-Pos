import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isToastOpen = false;

  constructor() {
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  pruebraVibracion() {
    navigator.vibrate(500);
  }
}
