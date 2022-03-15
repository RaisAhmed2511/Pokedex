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
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemonRecherche : string = '';
  allData : Array<PokemonComponent> = [];
  pokemonApiUrl = '';
  nombre = 1;
  searchText:any;

  constructor(public http : HttpClient, private dialog : MatDialog) {
    this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemons?page=1';
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

  ngOnInit(): void {
  }

  readApi(URL : string){
    return this.http.get(URL);
  }

  page(nombre : number){
    if(this.nombre + nombre >= 1 && this.nombre + nombre <= 40){
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
          
        /*
        this.pokemonData.id = data['id'];
        this.pokemonData.nom = data['name'];
        this.pokemonData.type1 = data['type_1']*/
      });

  
    }

    
  }

  infos(pokemon : PokemonComponent){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let legendaire = 'non';
    if(pokemon.pokemonData.legendaire == true){
      legendaire = 'oui';
    }
    this.dialog.open(PokemonComponent, {
      data:{
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
      },
      panelClass: 'custom-modalbox'
    });
  }


  

}
