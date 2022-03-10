import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PokedexComponent } from './pokedex/pokedex.component';
const routes: Routes = [
  { path :'', component : AccueilComponent },
  { path:'accueil', component : AccueilComponent },
  { path:'pokedex', component : PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
