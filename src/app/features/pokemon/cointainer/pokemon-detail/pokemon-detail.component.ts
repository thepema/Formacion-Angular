import { Location, TitleCasePipe } from '@angular/common';
import {
  Component,
  effect,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { TipoPokemonPipe } from '../../services/tipo-pokemon.pipe';

@Component({
  selector: 'app-pokemon-detail',
  imports: [TitleCasePipe, TipoPokemonPipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnDestroy {
  public nombre: InputSignal<string> = input('');

  public closeEmitter: OutputEmitterRef<void> = output<void>();

  constructor(
    public readonly location: Location,
    public readonly pokemonServiceService: PokemonServiceService
  ) {
    effect(() => {
      const nombreValue = this.nombre();
      if (nombreValue) {
        this.pokemonServiceService.getPokemonDetail(nombreValue);
      }
    });
  }

  public pokemon = this.pokemonServiceService.pokemonDetail;

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
