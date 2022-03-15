import { Component, OnInit } from '@angular/core';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  // animations : [
  //   trigger('itemAnim', [
  //     transition('vois => *',[
  //       style({
  //         opacity:0
  //       })
  //     ])
  //   ])
  // ]
})
export class AccueilComponent implements OnInit {
  title : String = 'PokeSite'
  constructor() { 
  }

  ngOnInit(): void {
  }
  scroll(element: HTMLElement) {
    element.scrollIntoView();
  }
}
