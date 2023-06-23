import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage {

  private theme = new BehaviorSubject('light');
  currentTheme = this.theme.asObservable();

  constructor() {
  }

  toggleTheme() {

    this.theme.next(this.theme.value === 'light' ? 'dark' : 'light');
  }
}
