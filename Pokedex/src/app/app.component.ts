import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  @Input() pokemon: any;

  title = 'Pokedex';

  constructor() {}

  getCurrentPokemon() {
    const changedPokemon: string = this.pokemon;
    return changedPokemon;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pokemon = this.getCurrentPokemon();
  }
}
