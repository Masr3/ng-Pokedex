import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private SinglePokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private AllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?';
  constructor(private http: HttpClient) {}

  getAllPokemon(limit: number, offset: number): Observable<Object> {
    return this.http.get(
      this.AllPokemonUrl + `offset=${offset}` + `&limit=${limit}`
    );
  }

  private pokemonId: number = 1;

  setPokemonId(id: number) {
    this.pokemonId = id;
  }

  getPokemonId() {
    return this.pokemonId;
  }

  getPokemon(pokemon: string | number): Observable<Object> {
    return this.http.get(this.SinglePokemonUrl + pokemon);
  }
}
