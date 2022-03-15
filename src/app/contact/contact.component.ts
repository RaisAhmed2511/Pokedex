import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('popOverState',[
      state('montrer',style({
        opacity: 1
      })),
      state('cacher', style({
        opacity:0
      })),
      transition('montrer => cacher',animate('600ms ease-out')),
      transition('cacher => montrer',animate('1000ms ease-in'))
    ])
  ]
})
export class ContactComponent implements OnInit {
  visibleJulien = false
  visibleAhmed = false
  constructor() { }

  ngOnInit(): void {
  }
  get stateName(){
    return this.visibleJulien ? 'montrer' :'cacher'
  }
  get stateName2(){
    return this.visibleAhmed ? 'montrer' :'cacher'
  }
  changer(){
    this.visibleJulien = !this.visibleJulien
  }
  changer2(){
    this.visibleAhmed = !this.visibleAhmed
  }


}
