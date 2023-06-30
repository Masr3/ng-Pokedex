import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  pokemon: any;
  pokemonId: number = 6;

  getPokemonTypeImg(type: any): string {
    switch (type) {
      case 'normal':
        return 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/NormalIC.png/70px-NormalIC.png';
      case 'fighting':
        return 'https://archives.bulbagarden.net/media/upload/thumb/9/9b/FightingIC.png/70px-FightingIC.png';
      case 'flying':
        return 'https://archives.bulbagarden.net/media/upload/thumb/d/dc/FlyingIC.png/70px-FlyingIC.png';
      case 'poison':
        return 'https://archives.bulbagarden.net/media/upload/thumb/8/86/PoisonIC.png/70px-PoisonIC.png';
      case 'ground':
        return 'https://archives.bulbagarden.net/media/upload/thumb/8/87/GroundIC.png/70px-GroundIC.png';
      case 'rock':
        return 'https://archives.bulbagarden.net/media/upload/thumb/e/e6/RockIC.png/70px-RockIC.png';
      case 'bug':
        return 'https://archives.bulbagarden.net/media/upload/thumb/0/06/BugIC_PE.png/70px-BugIC_PE.png';
      case 'ghost':
        return 'https://archives.bulbagarden.net/media/upload/thumb/c/c3/GhostIC.png/70px-GhostIC.png';
      case 'steel':
        return 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/SteelIC.png/70px-SteelIC.png';
      case 'fire':
        return 'https://archives.bulbagarden.net/media/upload/thumb/9/9f/FireIC.png/70px-FireIC.png';
        break;
      case 'water':
        return 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/WaterIC.png/70px-WaterIC.png';
      case 'grass':
        return 'https://archives.bulbagarden.net/media/upload/thumb/a/a5/GrassIC.png/70px-GrassIC.png';
      case 'electric':
        return 'https://archives.bulbagarden.net/media/upload/thumb/e/ea/ElectricIC.png/70px-ElectricIC.png';
      case 'psychic':
        return 'https://archives.bulbagarden.net/media/upload/thumb/f/f8/PsychicIC.png/70px-PsychicIC.png';
      case 'ice':
        return 'https://archives.bulbagarden.net/media/upload/thumb/8/86/IceIC.png/70px-IceIC.png';
      case 'dragon':
        return 'https://archives.bulbagarden.net/media/upload/thumb/c/c3/DragonIC.png/70px-DragonIC.png';
      case 'dark':
        return 'https://archives.bulbagarden.net/media/upload/thumb/e/e3/DarkIC.png/70px-DarkIC.png';
      case 'fairy':
        return 'https://archives.bulbagarden.net/media/upload/thumb/3/31/FairyIC.png/70px-FairyIC.png';
    }
    return '';
  }

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pokemonId = params['id'];

      this.pokemonService.getPokemon(this.pokemonId).subscribe((data) => {
        console.log(data);
        this.pokemon = data;
      });
    });
  }
}
