import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data : any){
    this.http.post("https://pure-stream-21702.herokuapp.com/api/pokemons/new", data).
    subscribe((result)=>{
      console.warn("result", result);
    })
    console.warn(data);
  }

}
