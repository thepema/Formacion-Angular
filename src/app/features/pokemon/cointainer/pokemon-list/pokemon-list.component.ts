import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../services/highlight.directive';
import { StoreService } from '../../../../core/store/store.service';
import { EntrenadorDetailComponent } from '../entrenador-detail/entrenador-detail.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent, CommonModule,EntrenadorDetailComponent, HighlightDirective],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  host: {
    '(window:keydown)': 'flecha($event)',
  },
})
export class PokemonListComponent implements OnInit {
  public itemSelected: { nombre: string; index: number } | null = null;

  constructor(
    private readonly pokemonService: PokemonServiceService,
    private readonly storeService: StoreService,
    private readonly router: Router
  ) {}

  public listPokemons = this.pokemonService.listPokemons;
  public entrenador = this.storeService.entrenador;

  ngOnInit(): void {
    this.pokemonService.getPokemonList();
    this.storeService.setSelected(undefined);
  }

  navigateDetalle(nombre: string, index: number) {
    this.itemSelected = { nombre: nombre, index: index };
    this.storeService.setSelected({ nombre: nombre, index: index });
  }

  navigateForm() {
    this.router.navigate(['/crear']);
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
