import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonID:number=0;
  pokemonImage: string='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.pokemonID+'.png';


  changePokemon(evento:number):void{
    this.pokemonID += evento;
    if (this.pokemonID < 0) {
      this.pokemonID = 0;
    }
    this.pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonID + '.png';
  }
}
