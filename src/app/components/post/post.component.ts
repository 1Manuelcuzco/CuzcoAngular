import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/my.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  title = 'myApp01';
  public datos: Array<any> = []
  estado: boolean
  constructor(private datosService: DatosService){
    this.datosService.getDatos().subscribe((resp:any) =>{
      console.log(resp)
      this.datos = resp
      this.estado = false;
    })
  }
  ngOnInit(): void {
  }
  showDatos(){
    return this.estado= !this.estado;
  }
}
