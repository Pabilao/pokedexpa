import { Component} from '@angular/core';
import { Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input({required:true})imageUrl:string="";
  @Output() pokemonID:EventEmitter<number>=new EventEmitter;

  previousPokemon(){
    
    this.pokemonID.emit(-1);
    
  }
  nextPokemon(){
    this.pokemonID.emit(+1);
    
  }

  
}
