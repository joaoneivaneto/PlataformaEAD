import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaleConoscoRoutingModule } from './fale-conosco-routing.module';
import { FaleConoscoComponent } from './fale-conosco.component';


@NgModule({
  declarations: [
    FaleConoscoComponent
  ],
  imports: [
    CommonModule,
    FaleConoscoRoutingModule
  ]
})
export class FaleConoscoModule { }
