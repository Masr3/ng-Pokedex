import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() pokemon: any;

  AllPokemon: any;
  allSprites: any = [];
  fetchedPokemon: any;
  limit: number = 9;
  offset: number = 0;
  isLoading: boolean = false;

  pokemonId: number = 6;

  constructor(
    private elementRef: ElementRef,
    private _pkmnService: PokemonService
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    const element = this.elementRef.nativeElement;
    const atBottom =
      window.innerHeight + window.scrollY >= element.offsetHeight;

    if (atBottom && !this.isLoading) {
      this.loadMorePokemon();
    }
  }

  getPokemonId(id: any) {
    console.log();

    console.log(id);
    this.pokemonId = id;
  }

  loadMorePokemon() {
    this.isLoading = true;

    this._pkmnService
      .getAllPokemon(this.limit, this.offset)
      .subscribe((data) => {
        this.AllPokemon = data;

        this.AllPokemon.results.forEach((data: any) => {
          this._pkmnService.getPokemon(data.name).subscribe((res: any) => {
            this.allSprites.push(res);

            this.offset += 1;
            this.isLoading = false;
          });
        });
      });
  }

  ngOnInit() {
    this._pkmnService.setPokemonId(this.pokemonId);
    this.loadMorePokemon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let changedPokemon = changes['pokemon'];

    this.pokemon = changedPokemon.currentValue;

    this._pkmnService.getPokemon(this.pokemon).subscribe((res) => {
      this.fetchedPokemon = res;

      console.log(this.fetchedPokemon);
      // let fetchedPokemonArray = []
      //
      // this.fetchedPokemon.map((pkmn:any)=>{
      //
      // })

      console.log(this.fetchedPokemon);
    });
  }
}
