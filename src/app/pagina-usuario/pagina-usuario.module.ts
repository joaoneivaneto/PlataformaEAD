import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaUsuarioRoutingModule } from './pagina-usuario-routing.module';
import { PaginaUsuarioComponent } from './pagina-usuario.component';
import {HeaderlogadoModule} from "../headerlogado/headerlogado.module";


@NgModule({
  declarations: [
    PaginaUsuarioComponent
  ],
  imports: [
    CommonModule,
    PaginaUsuarioRoutingModule,
    HeaderlogadoModule
  ]
})
export class PaginaUsuarioModule { }
