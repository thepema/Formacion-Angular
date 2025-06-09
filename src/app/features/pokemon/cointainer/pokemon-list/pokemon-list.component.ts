import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  public itemSelected: any;
  constructor(private readonly pokemonService: PokemonServiceService) {}

  public listPokemons = this.pokemonService.listPokemons;

  ngOnInit(): void {
    this.pokemonService.getPokemonList();
  }

  navigateDetalle(nombre: string) {
    this.itemSelected = nombre;
   }
}
