import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
      imports: [
         FormsModule,
         ReactiveFormsModule
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

  constructor(public http : HttpClient) {
    this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemons?page=1';
      this.readApi(this.pokemonApiUrl)
      .subscribe((data : any) => {
          for(let i = 0; i < 20; i++){
            this.allData[i] = new PokemonComponent();
            this.allData[i].initialiser(data['data'][i]['id'], data['data'][i]['name'], data['data'][i]['type_1'])
          }
          
        /*
        this.pokemonData.id = data['id'];
        this.pokemonData.nom = data['name'];
        this.pokemonData.type1 = data['type_1']*/
      });
   }

  ngOnInit(): void {
  }

  readApi(URL : string){
    return this.http.get(URL);
  }

  page(nombre : number){
    if(this.nombre + nombre >= 1 && this.nombre + nombre <= 5){
      this.nombre = this.nombre + nombre;
      this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemons?page=' + this.nombre;
      this.readApi(this.pokemonApiUrl)
      .subscribe((data : any) => {
          
          for(let i = 0; i < 20; i++){
            this.allData[i] = new PokemonComponent();
            this.allData[i].initialiser(data['data'][i]['id'], data['data'][i]['name'], data['data'][i]['type_1'])
          }
          
        /*
        this.pokemonData.id = data['id'];
        this.pokemonData.nom = data['name'];
        this.pokemonData.type1 = data['type_1']*/
      });
    }

    
  }


  

}
