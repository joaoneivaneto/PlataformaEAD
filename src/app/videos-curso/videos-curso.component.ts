import { Component, OnInit } from '@angular/core';
import {HeaderlogadoComponent} from "../headerlogado/headerlogado.component";
import * as $ from 'jquery';

@Component({
  selector: 'app-videos-curso',
  templateUrl: './videos-curso.component.html',
  styleUrls: ['./videos-curso.component.css']
})
export class VideosCursoComponent  extends HeaderlogadoComponent  implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(){
    $('.accordion-body').slideUp()
    //selecione todos os elemntos  e atribuindo a uma variavel
   $('.accordion-header').on('click',function(){
     $('.accordion-body').slideUp()
     if($(this).attr('class') != 'active'){
       $('.accordion-header').removeClass('active');
       $(this).addClass('active');
       $(this).next().slideDown();

     }else{
       $(this).next().slideUp();
       $(this).removeClass('active');
     }
   } )
  }
}
