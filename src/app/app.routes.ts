import { Routes } from '@angular/router';
import { OrigenComponent } from './origen/origen.component';
import { DestinoComponent } from './destino/destino.component';
import { DestinoPasoMultipleComponent } from './destino-paso-multiple/destino-paso-multiple.component';

export const routes: Routes = [
    { 'path': 'origen', 'component': OrigenComponent},
    { 'path': 'destino/:id', 'component': DestinoComponent},
    { 'path': 'destino-multiple/:nombre/:ciudad', 'component': DestinoPasoMultipleComponent},
    { 'path': '', redirectTo: 'origen', 'pathMatch': 'full'}
];
