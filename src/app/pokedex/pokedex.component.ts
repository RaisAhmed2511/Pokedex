import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons :any = {};

  constructor(public http : HttpClient) {
   }

  ngOnInit(): void {
  }


}
