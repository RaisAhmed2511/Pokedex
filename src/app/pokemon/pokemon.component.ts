import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonData = {
    id: 0,
    nom: '',
    type1: ''
  };

  constructor() {
   }

  ngOnInit(): void {
  }

  initialiser(id : number, nom : string, type1 : string){
    this.pokemonData.id = id;
    this.pokemonData.nom = nom;
    this.pokemonData.type1 = type1;
  }


}
