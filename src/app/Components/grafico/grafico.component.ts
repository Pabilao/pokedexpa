import { NgIf, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  @Input() vidaPokemon: number = 0; // Initialize to 0
  @Input() defensaPokemon: number = 0; // Initialize to 0
  @Input() ataquePokemon: number = 0; // Initialize to 0
  @Input() idPokemon: string = "#000";
  @Input() nombrePokemon: string = "Pokemon";
  @Input() tipoPokemon: string = "Normal";

  showPercentage = {
    hp: false,
    attack: false,
    defense: false
  };
  toggleDisplay2(stat: 'hp') {
    this.showPercentage[stat] = !this.showPercentage[stat];
  }

  toggleDisplay(stat: 'attack' | 'defense') {
    this.showPercentage[stat] = !this.showPercentage[stat];
  }
  calculateVida(value:number): number{
    return (value/value)*100;
  }
  calculatePercentage(value: number, max: number): number {
    if (max == 0) { 
      return 0; 
    } else {
    return parseFloat(((value / max) * 100).toFixed(1)); 
    }
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}