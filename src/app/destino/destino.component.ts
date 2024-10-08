import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-destino',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './destino.component.html',
  styleUrl: './destino.component.css'
})
export class DestinoComponent {
  @Input() id:number = 0;

}
