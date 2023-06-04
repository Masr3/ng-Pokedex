import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) {

  }

  getPokemon(pokemon: string):Observable<Object> {
    return this.http.get(this.url+pokemon);
  }




}
