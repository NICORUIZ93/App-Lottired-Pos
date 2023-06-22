import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'sales', url: '/sales', icon: 'cart' },
    { title: 'my-sales', url: '/my-sales', icon: 'list' },
    { title: 'news', url: '/news', icon: 'mail' },
    { title: 'configurations', url: '/configurations', icon: 'cog' },
    { title: 'login', url: '/login', icon: 'finger-print' },
  ];

  constructor() {}
}
