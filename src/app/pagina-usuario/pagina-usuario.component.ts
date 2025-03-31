import { Component, OnInit } from '@angular/core';
import {HeaderlogadoComponent} from "../headerlogado/headerlogado.component";

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent extends HeaderlogadoComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit = (): void => {

  };

}
