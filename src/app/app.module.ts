import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaIncialComponent } from './PaginaIncial/PaginaIncial.component';
import { CadastrarComponent } from './Cadastrar/Cadastrar.component';
import { ListaCursosComponent } from './listaCursos/listaCursos.component';
import { DetalheCursoComponent } from './listaCursos/detalheCurso/detalheCurso.component';

@NgModule({
  declarations: [				
    AppComponent,
      PaginaIncialComponent,
      CadastrarComponent,
      ListaCursosComponent,
      DetalheCursoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
