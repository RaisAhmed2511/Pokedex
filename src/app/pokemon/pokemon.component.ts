import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonApiUrl = '';
  pokemonData = {
    id: 0,
    nom: '',
    type1: ''
  };

  constructor(public http : HttpClient) {
    for(let i = 1; i < 10; i++){
      this.pokemonApiUrl = 'https://pure-stream-21702.herokuapp.com/api/pokemon/' + i;
      this.readApi(this.pokemonApiUrl)
      .subscribe((data : any) => {
        this.pokemonData.id = data['id'];
        this.pokemonData.nom = data['name'];
        this.pokemonData.type1 = data['type_1']
      });
    }
    
   }

  ngOnInit(): void {
  }

  readApi(URL : string){
    return this.http.get(URL);
  }

}
