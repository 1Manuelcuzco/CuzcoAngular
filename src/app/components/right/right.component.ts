import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
title: string;
noticias: string[];
estadoNoticias: boolean;
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
