import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './sections/navbar/navbar.component';
import { PacientesComponent } from './pages/expedientes/pacientes/pacientes.component';
import { OrdenesCreditoComponent } from './pages/expedientes/ordenes-credito/ordenes-credito.component';
import { OrdenesContadoComponent } from './pages/expedientes/ordenes-contado/ordenes-contado.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PacientesComponent,
    OrdenesCreditoComponent,
    OrdenesContadoComponent,
    ExpedientesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
