import { Location, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [TitleCasePipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  constructor(
    public readonly location: Location,
    public readonly pokemonServiceService: PokemonServiceService,
    private readonly activeRoute: ActivatedRoute
  ) {}

  public pokemon = this.pokemonServiceService.pokemonDetail;

  ngOnInit(): void {
    this.pokemonServiceService.getPokemonDetail(
      this.activeRoute.snapshot.params['nombre']
    );
  }

  ngOnDestroy(): void {
    this.pokemonServiceService.cleanDetail();
  }

  public getTipo(types: any[]): string {
    return types.map((type) => type.type.name).join(' / ');
  }
}
