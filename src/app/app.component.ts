import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import * as events from "node:events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JNN EAD';

  constructor(private router: Router) {}
  rotaAtual:string='';
  ngOnInit() {
    this.rotaAtual = 'home';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/home' || event.url == '/') {this.rotaAtual = event.url;}
        else if(event.url == '/listaCursos'){this.rotaAtual = event.url;}
        else if(event.url == '/sobre'){this.rotaAtual = event.url;}
        else if(event.url == '/faleConosco'){this.rotaAtual = event.url;}
        else {this.rotaAtual = '';}

      }
    });
  }
}
