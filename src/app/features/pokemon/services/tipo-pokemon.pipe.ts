import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoPokemon'
})
export class TipoPokemonPipe implements PipeTransform {

  transform(types: any[]): string {
    if (!Array.isArray(types)) return '';
    return types.map(type => type.type?.name).join(' / ');
  }

}
