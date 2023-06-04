import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {

  @Output() newPokemon = new EventEmitter<string>();

  constructor() {
  }


  addNewPokemon(pokemon:HTMLInputElement) {
    this.newPokemon.emit(pokemon.value);
  }


}
