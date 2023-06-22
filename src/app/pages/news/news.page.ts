import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {
  mensajes = [
    {
      texto:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      titulo: 'Titulo 1',
    },
    {
      texto:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      titulo: 'Titulo 1',
    },
    {
      texto:
        "Here's a small text description for the card content. Nothing more, nothing less.",
      titulo: 'Titulo 1',
    },
  ];
  constructor() {}
}
