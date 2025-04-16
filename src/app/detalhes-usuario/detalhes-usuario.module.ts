import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesUsuarioRoutingModule } from './detalhes-usuario-routing.module';
import { DetalhesUsuarioComponent } from './detalhes-usuario.component';
import {HeaderlogadoModule} from "../headerlogado/headerlogado.module";


@NgModule({
  declarations: [
    DetalhesUsuarioComponent
  ],
  imports: [
    CommonModule,
    DetalhesUsuarioRoutingModule,
    HeaderlogadoModule
  ]
})
export class DetalhesUsuarioModule { }
