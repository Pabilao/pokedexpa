import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input() imageUrl: string = "";
  @Output() pokemonID = new EventEmitter<number>();
  @Output() evolveID = new EventEmitter<number>();

  previousPokemon() {
    this.pokemonID.emit(-1);
  }

  nextPokemon() {
    this.pokemonID.emit(1);
  }

  evolvePokemon(direction: number) {
    this.evolveID.emit(direction);
  }
}