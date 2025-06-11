import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { StoreService } from '../store/store.service';

export const pokemonSelectedGuard: CanActivateFn = () => {
    const store = inject(StoreService);

    return !!store.selectedPokemon();
};
