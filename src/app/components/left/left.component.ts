import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
titulo = "Ultimas Noticias";
title: string;
noticias: string[];
estadoNoticias: boolean;
items: Array <string> = ['Noticia 1', 'Noticia 2', 'Noticia 3'];
constructor() {
  this.title = 'Todas las Noticias ';
  this.noticias = ['Noticia 1', 'Noticia 2', 'Noticia 3'];
  this.estadoNoticias = false;
}

   ngOnInit(): void {
  }

  showNoticias(){
    return this.estadoNoticias= !this.estadoNoticias;
  }
  nuevaNoticia(noticia){
    this.noticias.push(noticia.value);
    noticia.value = '';
    return false;
  }
}
