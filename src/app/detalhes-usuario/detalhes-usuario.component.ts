import { Component, OnInit } from '@angular/core';
import {HeaderlogadoComponent} from "../headerlogado/headerlogado.component";
import * as $ from "jquery";

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent extends HeaderlogadoComponent implements OnInit {

  constructor() {
    super();
  }

  override  ngOnInit(): void {
    $('.modalDadosPessoais').on('click',function (){
      $('#modal_dados-pessoais').css('display','block');
    })
    $('.modalEndereco').on('click',function (){
      $('#modal_endereco').css('display','block');
    })
    $('.modalBancarios').on('click',function (){
      $('#modal_bancarios').css('display','block');
    })
    $('.close').on('click',function (){
      $('#modal_dados-pessoais').css('display','none');
      $('#modal_endereco').css('display','none');
      $('#modal_bancarios').css('display','none');
    })

  }


}
