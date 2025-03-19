import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RemoveSpacesPipe, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of heroes';
}
