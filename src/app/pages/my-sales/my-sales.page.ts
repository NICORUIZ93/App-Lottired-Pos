import {Component} from '@angular/core';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.page.html',
  styleUrls: ['./my-sales.page.scss'],
})
export class MySalesPage {
  ventas = [
    {
      fecha: '2023-05-01',
      nombre: 'Lotería Navidad',
      precio: 20,
      cantidad: 2,
      vendedor: 'Juan',
    },
    {
      fecha: '2023-05-02',
      nombre: 'Lotería Nacional',
      precio: 10,
      cantidad: 5,
      vendedor: 'María',
    },
    {
      fecha: '2023-05-03',
      nombre: 'Lotería Primitiva',
      precio: 5,
      cantidad: 10,
      vendedor: 'Pedro',
    },
  ];

  constructor() {
  }
}
