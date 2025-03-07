import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './Cadastrar/Cadastrar.component';
import { PaginaIncialComponent } from './PaginaIncial/PaginaIncial.component';
import { ListaCursosComponent } from './listaCursos/listaCursos.component';

const routes: Routes = [
  { path:"cadastrar",component:CadastrarComponent},
  { path:"home", component:PaginaIncialComponent},
  {path:"listaCursos", component:ListaCursosComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
