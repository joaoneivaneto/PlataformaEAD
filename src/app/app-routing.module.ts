import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './Cadastrar/Cadastrar.component';
import { PaginaIncialComponent } from './PaginaIncial/PaginaIncial.component';
import { ListaCursosComponent } from './listaCursos/listaCursos.component';
import { DetalheCursoComponent } from './listaCursos/detalheCurso/detalheCurso.component';


const routes: Routes = [
  { path:"cadastrar",component:CadastrarComponent},
  { path:"home", component:PaginaIncialComponent},
  {path:"listaCursos", component:ListaCursosComponent},
  {path:"listaCursos/detalheCurso", component:DetalheCursoComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:'login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule) },
  { path: 'faleConosco', loadChildren: () => import('./fale-conosco/fale-conosco.module').then(m => m.FaleConoscoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
