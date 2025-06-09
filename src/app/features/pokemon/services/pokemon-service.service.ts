import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  public listPokemons: WritableSignal<any[]> = signal<any[]>([]);
  public pokemonDetail: WritableSignal<any> = signal<any>(null);

  constructor(private http: HttpClient) {}
  /**
   * Pertición get a la Api para obtener los datos de los Pokémon
   */
  getPokemonList(): void {
    if (this.listPokemons().length === 0) {
      this.http
        .get<any[]>('https://pokeapi.co/api/v2/pokemon')
        .subscribe((data: any): void => {
          console.log(data);
          this.listPokemons.set(data.results);
        });
    }
  }

  /**
   * Método para obtener los detalles de un Pokémon específico
   * @param pokemon Nombre del Pokémon
   */
  getPokemonDetail(pokemon: string): void {
    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .pipe(
        catchError(() => {
          window.alert(`Error al obtener los detalles del Pokémon`);
          return throwError(() => 'Error al obtener los detalles del Pokémon');
        })
      )
      .subscribe((data: any): void => {
        if (data) {
          this.pokemonDetail.set(data);
        }
      });
  }

  /**
   * Método para limpiar la lista de Pokémon
   */
  cleanDetail(): void {
    this.pokemonDetail.set(null);
  }
}
