import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-Cadastrar',
  templateUrl: './Cadastrar.component.html',
  styleUrls: ['./Cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    this.ocultar();
    var count_click = 0;
    
    const voltar_proximo = (page:number) =>  {
      $('.button_dados_pessoais1').show();
      $('.voltar').css({
        'margin-left': '-10px',
        'margin-top': '-10px',
        'left': '480px',
        'background-color': 'blue'
  
      });
      if(page == 0){
        this.ocultar()
        $('button_dados_pessoais1').show();
        $('.dados_pessoais').show();
        $('.title_dados_pessoais').show();
      }
      if(page == 1){
        this.ocultar();
        $('button_dados_pessoais1').show();
        $('.dados_pessoais_part2').show();
        $('.title_dados_pessoais').show();
        $('.voltar').show();  
      }
      if(page == 2){
        this.ocultar();
        $('button_dados_pessoais1').show();
        $('.title_endereco').show();
        $('.endereco').show();
        $('.voltar').show();
      }
      if(page == 3){
        this.ocultar()
        $('button_dados_pessoais1').show();
        $('.endereco_part2').show();
        $('.title_dados_bancarios').show();
        $('.dados_bancarios').show();
        $('.button_dados_pessoais1').hide();
        $('.title_endereco').show();
        $('.voltar').show();
        $('button').show();
        $('button').css({
          'margin-top':'40px',
          'width':'130px',
          'left':'430px'
        });
        $('.voltar').css({
          'left':'410px',
          'margin-top':'40px',
    
        });
      }
    }

    $('.dados_pessoais').show();
    $('.title_dados_pessoais').show();
    $('.button_dados_pessoais1').on('click',function(){
      count_click++;
      voltar_proximo(count_click);
      
    })
    $('.voltar').on('click',function(){
      count_click--;
      voltar_proximo(count_click);
      
    })
    
}
ocultar(){
  $('.dados_pessoais_part2').hide();
  $('.title_endereco').hide();
  $('.endereco').hide();
  $('.endereco_part2').hide();
  $('.title_endereco').hide();
  $('.title_dados_bancarios').hide();
  $('.dados_bancarios').hide();
  $('button').hide();
  $('.voltar').hide();
  $('.dados_pessoais').hide();
  $('.title_dados_pessoais').hide();
}


}