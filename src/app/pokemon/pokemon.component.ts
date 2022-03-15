import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonData = {
    id: 0,
    nom: '',
    type1: '',
    type2: '',
    generation: 0,
    legendaire: false,
    pv: 0,
    attaque: 0,
    defense: 0,
    vitesse: 0
  };
  

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) {
  }

  ngOnInit(): void {
  }

  initialiser(id : number, nom : string, type1 : string, type2 : string){
    this.pokemonData.id = id;
    this.pokemonData.nom = nom;
    this.pokemonData.type1 = type1;
    this.pokemonData.type2 = type2;
  }

  initialiser2(att : number, def : number, vit : number){
    this.pokemonData.attaque = att;
    this.pokemonData.defense = def;
    this.pokemonData.vitesse = vit;
  }

  initialiser3(gen : number, leg : boolean, pv : number){
    this.pokemonData.generation = gen;
    this.pokemonData.legendaire = leg;
    this.pokemonData.pv = pv;
  }


}
