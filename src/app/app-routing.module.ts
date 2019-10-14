import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { PacientesComponent } from './pages/expedientes/pacientes/pacientes.component';
import { OrdenesCreditoComponent } from './pages/expedientes/ordenes-credito/ordenes-credito.component';
import { OrdenesContadoComponent } from './pages/expedientes/ordenes-contado/ordenes-contado.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'expedientes', component: ExpedientesComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'ordenescredito', component: OrdenesCreditoComponent },
  { path: 'ordenescontado', component: OrdenesContadoComponent },
  { path: '', redirectTo: '/expedientes', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
