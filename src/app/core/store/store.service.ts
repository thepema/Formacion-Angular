import { Injectable, signal, WritableSignal } from '@angular/core';

type Entrenador = {
  nombre: string;
  tarjetaDeEntrenador: Tarjeta;
  edad: number;
  region: string;
  genero: string;
  pokemon: any;
  pokedex: boolean;
};

type Tarjeta = {
  numero: number;
  validez: number;
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public entrenador: WritableSignal<Entrenador | undefined> = signal<Entrenador | undefined>(undefined);
  public selectedPokemon: WritableSignal<any> = signal<any>(undefined);

  setEntrenador(entrenador: Entrenador): void {
    this.entrenador.set(entrenador);
  }

   setSelected(pokemon: any): void {
    this.selectedPokemon.set(pokemon);
  }
}
