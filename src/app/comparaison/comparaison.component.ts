import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
      imports: [
         FormsModule,
         ReactiveFormsModule,
         MatDialog
      ]

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent implements OnInit {

  pokemonRecherche : string = '';
  allData : Array<PokemonComponent> = [];
  allData2 : Array<PokemonComponent> = [];
  pokemon1 : any = {nom : ""};
  pokemon2 : any = {nom : ""};
  pokemonApiUrl = '';
  nombre = 1;
  searchText1:any;
  searchText2:any;

  constructor(public http : HttpClient, private dialog : MatDialog) {
    this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemons?page=1';
      this.readApi(this.pokemonApiUrl)
      .subscribe((data : any) => {
          for(let i = 0; i < 20; i++){
            this.allData[i] = new PokemonComponent(null);
            this.allData[i].initialiser(data['data'][i]['id'], data['data'][i]['name'], data['data'][i]['type_1'], data['data'][i]['type_2']);
            this.allData[i].initialiser2(data['data'][i]['attack_points'], data['data'][i]['defense_points'], data['data'][i]['speed_points']);
            this.allData[i].initialiser3(data['data'][i]['generation'], data['data'][i]['legendary'], data['data'][i]['health_points']);

            this.allData2[i] = new PokemonComponent(null);
            this.allData2[i].initialiser(data['data'][i]['id'], data['data'][i]['name'], data['data'][i]['type_1'], data['data'][i]['type_2']);
            this.allData2[i].initialiser2(data['data'][i]['attack_points'], data['data'][i]['defense_points'], data['data'][i]['speed_points']);
            this.allData2[i].initialiser3(data['data'][i]['generation'], data['data'][i]['legendary'], data['data'][i]['health_points']);
          }
      });
    
   }

  ngOnInit(): void {
  }

  readApi(URL : string){
    return this.http.get(URL);
  }

  page1(nombre : number){
    if(this.nombre + nombre >= 1 && this.nombre + nombre <= 5){
      this.nombre = this.nombre + nombre;
      this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemons?page=' + this.nombre;
      this.readApi(this.pokemonApiUrl)
      .subscribe((data : any) => {
          
          for(let i = 0; i < 20; i++){
            this.allData[i] = new PokemonComponent(null);
            this.allData[i].initialiser(data['data'][i]['id'], data['data'][i]['name'], data['data'][i]['type_1'], data['data'][i]['type_2']);
            this.allData[i].initialiser2(data['data'][i]['attack_points'], data['data'][i]['defense_points'], data['data'][i]['speed_points']);
            this.allData[i].initialiser3(data['data'][i]['generation'], data['data'][i]['legendary'], data['data'][i]['health_points']);
          }
      });
    }

    
  }

  page2(nombre : number){
    if(this.nombre + nombre >= 1 && this.nombre + nombre <= 5){
      this.nombre = this.nombre + nombre;
      this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemons?page=' + this.nombre;
      this.readApi(this.pokemonApiUrl)
      .subscribe((data : any) => {
          
          for(let i = 0; i < 20; i++){
            this.allData2[i] = new PokemonComponent(null);
            this.allData2[i].initialiser(data['data'][i]['id'], data['data'][i]['name'], data['data'][i]['type_1'], data['data'][i]['type_2']);
            this.allData2[i].initialiser2(data['data'][i]['attack_points'], data['data'][i]['defense_points'], data['data'][i]['speed_points']);
            this.allData2[i].initialiser3(data['data'][i]['generation'], data['data'][i]['legendary'], data['data'][i]['health_points']);
          }
      });
    }

    
  }

  infos1(pokemon : PokemonComponent){
    
    let legendaire = 'non';
    if(pokemon.pokemonData.legendaire == true){
      legendaire = 'oui';
    }
    
    this.pokemon1 = {
        id: pokemon.pokemonData.id,
        nom: pokemon.pokemonData.nom,
        type1: pokemon.pokemonData.type1,
        type2: pokemon.pokemonData.type2,
        generation: pokemon.pokemonData.generation,
        legendaire: legendaire,
        pv: pokemon.pokemonData.pv,
        attaque: pokemon.pokemonData.attaque,
        defense: pokemon.pokemonData.defense,
        vitesse: pokemon.pokemonData.vitesse
    }

    
  }

  infos2(pokemon : PokemonComponent){
    
    let legendaire = 'non';
    if(pokemon.pokemonData.legendaire == true){
      legendaire = 'oui';
    }
    
    this.pokemon2 = {
        id: pokemon.pokemonData.id,
        nom: pokemon.pokemonData.nom,
        type1: pokemon.pokemonData.type1,
        type2: pokemon.pokemonData.type2,
        generation: pokemon.pokemonData.generation,
        legendaire: legendaire,
        pv: pokemon.pokemonData.pv,
        attaque: pokemon.pokemonData.attaque,
        defense: pokemon.pokemonData.defense,
        vitesse: pokemon.pokemonData.vitesse
    }

    
  }

}
