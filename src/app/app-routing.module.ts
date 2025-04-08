import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './Cadastrar/Cadastrar.component';
import { PaginaIncialComponent } from './PaginaIncial/PaginaIncial.component';
import { ListaCursosComponent } from './listaCursos/listaCursos.component';
import { DetalheCursoComponent } from './listaCursos/detalheCurso/detalheCurso.component';
import {NaoEncontradaComponent} from "./nao-encontrada/nao-encontrada.component";


const routes: Routes = [
  { path:"cadastrar",component:CadastrarComponent},
  { path:"home", component:PaginaIncialComponent},
  {path:"listaCursos", component:ListaCursosComponent},
  {path:"listaCursos/detalheCurso", component:DetalheCursoComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:'login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule) },
  { path: 'faleConosco', loadChildren: () => import('./fale-conosco/fale-conosco.module').then(m => m.FaleConoscoModule) },
  { path: 'paginaUsuario', loadChildren: () => import('./pagina-usuario/pagina-usuario.module').then(m => m.PaginaUsuarioModule) },
  { path: 'videosCurso', loadChildren: () => import('./videos-curso/videos-curso.module').then(m => m.VideosCursoModule) },
  { path: 'headerLogado', loadChildren: () => import('./headerlogado/headerlogado.module').then(m => m.HeaderlogadoModule) },
  { path: 'detalhesUsuario', loadChildren: () => import('./detalhes-usuario/detalhes-usuario.module').then(m => m.DetalhesUsuarioModule) },
  {path:'**', component:NaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
