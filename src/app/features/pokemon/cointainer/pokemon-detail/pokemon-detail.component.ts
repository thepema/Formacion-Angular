import { Location, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  imports: [ TitleCasePipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  constructor(public readonly location: Location) {}
  public pokemon = {
    name: 'bulbasaur',
    id: 1,
    height: 7,
    weight: 69,
    base_experience: 64,
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } }
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    }
  };

  public getTipo(types: any[]): string {
    return types.map(type => type.type.name).join(' / ');
  }
}
