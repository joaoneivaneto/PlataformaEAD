import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaUsuarioRoutingModule } from './pagina-usuario-routing.module';
import { PaginaUsuarioComponent } from './pagina-usuario.component';


@NgModule({
  declarations: [
    PaginaUsuarioComponent
  ],
  imports: [
    CommonModule,
    PaginaUsuarioRoutingModule
  ]
})
export class PaginaUsuarioModule { }
