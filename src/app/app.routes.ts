import { Routes } from '@angular/router';
import { PokemonListComponent } from './features/pokemon/cointainer/pokemon-list/pokemon-list.component';

export const routes: Routes = [
    { path: '', loadComponent:() => import('./features/pokemon/cointainer/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent), },
    // { path: '', component: PokemonListComponent }
];
