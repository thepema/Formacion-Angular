import { Injectable, signal, WritableSignal } from '@angular/core';

type Entrenador = {
  nombre: string;
  tarjetaDeEntrenador: Tarjeta;
  edad: number;
  region: string;
  genero: string;
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

  setEntrenador(entrenador: Entrenador): void {
    console.log('Entrenador guardado:', entrenador);
    this.entrenador.set(entrenador);
  }
}
