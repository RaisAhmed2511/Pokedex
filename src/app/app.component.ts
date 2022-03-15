import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { myAnimation } from './animations/anim2'; // pour changer d'animation
import { RouterOutlet } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
      imports: [
         FormsModule,
         ReactiveFormsModule,
         Ng2SearchPipeModule,
         RouterOutlet
      ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[myAnimation]
})
export class AppComponent {
  title = 'Pokedex';
  public getRouterOutletState(outlet : RouterOutlet){
    return outlet.isActivated ? outlet.activatedRoute :'';
  }
}
