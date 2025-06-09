import { Location, TitleCasePipe } from '@angular/common';
import { Component, input, InputSignal, OnDestroy, OnInit, output, OutputEmitterRef, Signal } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { TipoPokemonPipe } from '../../services/tipo-pokemon.pipe';

@Component({
  selector: 'app-pokemon-detail',
  imports: [TitleCasePipe, TipoPokemonPipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  public nombre: InputSignal<string> = input('');
  public closeEmitter: OutputEmitterRef<void> = output<void>();

  constructor(
    public readonly location: Location,
    public readonly pokemonServiceService: PokemonServiceService,
  ) {}

  public pokemon = this.pokemonServiceService.pokemonDetail;

  ngOnInit(): void {
    this.pokemonServiceService.getPokemonDetail(this.nombre());
  }

  ngOnDestroy(): void {
    this.pokemonServiceService.cleanDetail();
  }

  public getTipo(types: any[]): string {
    return types.map((type) => type.type.name).join(' / ');
  }

  public close(): void {
    this.closeEmitter.emit();
  }
}
