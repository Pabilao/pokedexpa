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
  pokemonID: number = 0;
  pokemonName: string = '';
  pokemonType: string = '';
  pokemonHP: number = 0;
  pokemonAttack: number = 0;
  pokemonDefense: number = 0;
  maxStats = {
    hp: 255, // Valor máximo de HP en la primera generación
    attack: 190, // Valor máximo de Ataque
    defense: 230 // Valor máximo de Defensa
  };
  
  pokemonImage: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonID + '.png';

  changePokemon(evento: number): void {
    this.pokemonID += evento;
    if (this.pokemonID < 1) {
      this.pokemonID = 1;
    }
    this.pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonID + '.png';
    
    // Aquí actualizaremos los datos del Pokémon
    this.updatePokemonData();
  }

  updatePokemonData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonID}`)
      .then(response => response.json())
      .then(data => {
        this.pokemonName = data.name;
        this.pokemonType = data.types[0].type.name;
        this.pokemonHP = data.stats[0].base_stat;
        this.pokemonAttack = data.stats[1].base_stat;
        this.pokemonDefense = data.stats[2].base_stat;
        // Emitir los nuevos datos al componente gráfico
        this.updateGraficoData();

      });
  }

  updateGraficoData() {
    // Aquí actualizaremos los datos que se muestran en el gráfico
  }
}