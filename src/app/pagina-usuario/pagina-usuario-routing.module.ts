import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaUsuarioComponent } from './pagina-usuario.component';

const routes: Routes = [{ path: '', component: PaginaUsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaUsuarioRoutingModule { }
