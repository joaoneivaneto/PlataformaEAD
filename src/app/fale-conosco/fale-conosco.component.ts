import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {
  email:string = "";
  msg:string='';
  assunto:string='';


  constructor() { }

  ngOnInit(): void {
  }


}
