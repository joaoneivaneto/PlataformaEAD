import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosCursoComponent } from './videos-curso.component';

const routes: Routes = [{ path: '', component: VideosCursoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosCursoRoutingModule { }
