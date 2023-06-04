import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges{

  @Input() pokemon:any

  fetchedPokemon:any;
  constructor(private _pkmnService:PokemonService) {

  }




  ngOnInit(){
    console.log("lo logre mamá! :'D")
  }

  ngOnChanges(changes: SimpleChanges): void {


    let changedPokemon = changes['pokemon']

    this.pokemon = changedPokemon.currentValue

    this._pkmnService.getPokemon(this.pokemon).subscribe(res=>{
      this.fetchedPokemon = res;
      console.log(this.fetchedPokemon)
    })
  }

}
