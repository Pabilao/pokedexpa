import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  @Input() vidaPokemon: number = 100;
  @Input() defensaPokemon: number = 100;
  @Input() ataquePokemon: number = 100;
  @Input() idPokemon: string = "#001";
  @Input() nombrePokemon: string = "Pokemon";
  @Input() tipoPokemon: string = "Normal";

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}