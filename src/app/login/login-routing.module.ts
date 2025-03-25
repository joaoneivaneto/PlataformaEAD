import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {PaginaUsuarioComponent} from "../pagina-usuario/pagina-usuario.component";


const routes:Routes = [
    { path: '', component: LoginComponent },

];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]

})
export class LoginRoutingModule {}
