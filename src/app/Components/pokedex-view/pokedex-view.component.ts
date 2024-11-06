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
  evolutionChain: any = null;
  maxStats = {
    hp: 255, // Valor máximo de HP en la primera generación
    attack: 190, // Valor máximo de Ataque
    defense: 230 // Valor máximo de Defensa
  };
  ngOnInit() {
    this.updatePokemonData();
  }

  pokemonImage: string = '';
  handleEvolution(direction: number) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.pokemonID}/`)
      .then(response => response.json())
      .then(data => {
        fetch(data.evolution_chain.url)
          .then(response => response.json())
          .then(evolutionData => {
            this.evolutionChain = evolutionData.chain;
            const newId = this.findEvolutionId(this.evolutionChain, this.pokemonID, direction);
            if (newId) {
              this.pokemonID = newId;
              this.updatePokemonData();
            }
          });
      });
  }

  private findEvolutionId(chain: any, currentId: number, direction: number): number | null {
    // Obtener el ID del Pokémon actual en la cadena
    const chainId = parseInt(chain.species.url.split('/').slice(-2, -1)[0]);
    
    // Si encontramos el Pokémon actual
    if (chainId === currentId) {
      // Para evolución hacia arriba
      if (direction > 0 && chain.evolves_to.length > 0) {
        return parseInt(chain.evolves_to[0].species.url.split('/').slice(-2, -1)[0]);
      }
      return null;
    }

    // Buscar en las evoluciones
    for (let evolution of chain.evolves_to) {
      // Recursivamente buscar en la cadena
      const foundId = this.findEvolutionId(evolution, currentId, direction);
      if (foundId) return foundId;
      
      // Para evolución hacia abajo
      if (direction < 0) {
        const evolutionId = parseInt(evolution.species.url.split('/').slice(-2, -1)[0]);
        if (evolutionId === currentId) {
          return chainId;
        }
      }
    }

    return null;
  }
  changePokemon(evento: number): void {
    this.pokemonID += evento;
    if (this.pokemonID < 1) {
      this.pokemonID = 1;
    }    
    // Aquí actualizaremos los datos del Pokémon
    this.updatePokemonData();
  }

  private updatePokemonData() {
    this.pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonID}`)
      .then(response => response.json())
      .then(data => {
        this.pokemonName = data.name;
        this.pokemonType = data.types[0].type.name;
        this.pokemonHP = data.stats[0].base_stat;
        this.pokemonAttack = data.stats[1].base_stat;
        this.pokemonDefense = data.stats[2].base_stat;
      });
  }
}