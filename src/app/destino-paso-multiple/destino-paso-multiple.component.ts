import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-destino-paso-multiple',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './destino-paso-multiple.component.html',
  styleUrl: './destino-paso-multiple.component.css'
})
export class DestinoPasoMultipleComponent {
  @Input() nombre: string = '';
  @Input() ciudad: string = '';

}
