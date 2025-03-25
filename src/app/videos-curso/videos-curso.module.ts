import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosCursoRoutingModule } from './videos-curso-routing.module';
import { VideosCursoComponent } from './videos-curso.component';


@NgModule({
  declarations: [
    VideosCursoComponent
  ],
  imports: [
    CommonModule,
    VideosCursoRoutingModule
  ]
})
export class VideosCursoModule { }
