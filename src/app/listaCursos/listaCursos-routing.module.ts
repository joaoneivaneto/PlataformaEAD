import { Route, RouterModule, Routes } from "@angular/router";
import { ListaCursosComponent } from "../listaCursos.component";
import { DetalheCursoComponent } from "./detalheCurso.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    { path:'', component:ListaCursosComponent},
    {path:'detalhesCurso', component:DetalheCursoComponent},
    {path:'login',component:LoginComponent})},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class listaCursosRoutingModule{}
