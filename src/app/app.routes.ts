import { Routes } from '@angular/router';
import { PokemonListComponent } from './features/pokemon/cointainer/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './features/pokemon/cointainer/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    { path: '', component: PokemonListComponent },
    { path: 'detail/:nombre', component: PokemonDetailComponent }
];
