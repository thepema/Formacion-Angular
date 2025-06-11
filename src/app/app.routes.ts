import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent:() => import('./features/pokemon/cointainer/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent), },
    { path: 'crear', loadComponent:() => import('./features/pokemon/cointainer/entrenador-form/entrenador-form.component').then(m => m.EntrenadorFormComponent), },
    // { path: '', component: PokemonListComponent }
];
