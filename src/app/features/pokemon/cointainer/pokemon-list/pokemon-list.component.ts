import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  constructor(private readonly router: Router, private readonly pokemonService: PokemonServiceService) {}

  public listPokemons = this.pokemonService.listPokemons;

  ngOnInit(): void {
    this.pokemonService.getPokemonList();
  }

  navigateDetalle(nombre: string) {
    this.router.navigate([`detail/${nombre}`]);
   }
}
