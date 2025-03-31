import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosCursoRoutingModule } from './videos-curso-routing.module';
import { VideosCursoComponent } from './videos-curso.component';
import {HeaderlogadoModule} from "../headerlogado/headerlogado.module";


@NgModule({
  declarations: [
    VideosCursoComponent
  ],
  imports: [
    CommonModule,
    VideosCursoRoutingModule,
    HeaderlogadoModule
  ]
})
export class VideosCursoModule { }
