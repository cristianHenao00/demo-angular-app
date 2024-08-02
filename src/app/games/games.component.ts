import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      <!-- Nueva directiva para hacer los ciclos y darle un track que es el iterador -->
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  // recibir el valor del padre al hijo
  @Input() username = '';
  // emitir el evento al padre desde el hijo
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Zelda',
    },
    {
      id: 2,
      name: 'Mario',
    },
    {
      id: 3,
      name: 'Donkey Kong',
    },
  ];
}
