import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../services/highlight.directive';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent, CommonModule, HighlightDirective],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  host: {
    '(window:keydown)': 'flecha($event)'
  }
})
export class PokemonListComponent implements OnInit {
  public itemSelected: { nombre: string; index: number } | null = null;
  constructor(private readonly pokemonService: PokemonServiceService) {}

  public listPokemons = this.pokemonService.listPokemons;

  ngOnInit(): void {
    this.pokemonService.getPokemonList();
  }

  navigateDetalle(nombre: string, index: number) {
    this.itemSelected = { nombre: nombre, index: index };
  }

  flecha(event: KeyboardEvent) {
    if (this.itemSelected) {
      if (event.key === 'ArrowUp') {
        if (this.itemSelected.index !== this.listPokemons().length - 1) {
          const index = this.itemSelected.index + 1;
          const up = this.listPokemons()[index];
          this.itemSelected = { nombre: up.name, index: index };
        }
      } else if (event.key === 'ArrowDown') {
        if (this.itemSelected.index !== 0) {
          const index = this.itemSelected.index - 1;
          const down = this.listPokemons()[index];
          this.itemSelected = { nombre: down.name, index: index };
        }
      }
    }
  }
}
