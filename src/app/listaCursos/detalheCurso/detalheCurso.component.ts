import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import * as $ from 'jquery';

@Component({
  selector: 'app-detalheCurso',
  templateUrl: './detalheCurso.component.html',
  styleUrls: ['./detalheCurso.component.css']
})
export class DetalheCursoComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  
  }
  login(){
    this.route.navigate(["login"])
  }
    
  
}
