import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderlogadoComponent } from './headerlogado.component';

const routes: Routes = [{ path: '', component: HeaderlogadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderlogadoRoutingModule { }
