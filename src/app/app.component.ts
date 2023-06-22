import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'Ventas', url: '/sales', icon: 'cart' },
    { title: 'Mis ventas', url: '/my-sales', icon: 'list' },
    { title: 'Noticias', url: '/news', icon: 'mail' },
    { title: 'configuracion', url: '/configurations', icon: 'cog' },
    { title: 'login', url: '/login', icon: 'finger-print' },
  ];

  constructor() {}
}
