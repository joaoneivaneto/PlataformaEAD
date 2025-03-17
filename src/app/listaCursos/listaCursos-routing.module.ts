import { RouterModule, Routes } from "@angular/router";
import { ListaCursosComponent } from './listaCursos.component';
import { DetalheCursoComponent } from './detalheCurso/detalheCurso.component';
import { NgModule } from "@angular/core";
import {LoginComponent} from "../login/login.component";

const routes:Routes = [
    { path:'', component:ListaCursosComponent},
    {path:'login',component:LoginComponent},
    {path:'detalhesCurso', component:DetalheCursoComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class listaCursosRoutingModule{}
