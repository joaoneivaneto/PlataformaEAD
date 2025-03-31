import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderlogadoRoutingModule } from './headerlogado-routing.module';
import { HeaderlogadoComponent } from './headerlogado.component';


@NgModule({
  declarations: [
    HeaderlogadoComponent
  ],
  exports: [
    HeaderlogadoComponent
  ],
  imports: [
    CommonModule,
    HeaderlogadoRoutingModule
  ]
})
export class HeaderlogadoModule { }
