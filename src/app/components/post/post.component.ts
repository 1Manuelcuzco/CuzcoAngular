import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/my.service';
import {Router} from '@angular/router';
import{ListapacientesI} from '../../modelos/listapacientes.interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  //title = 'myApp01';
  //public datos: Array<any>
  //pacientes:ListapacientesI[];
  //estado: boolean
  //constructor(private api:DatosService){
    //this.json.getDatos().subscribe((resp:any) =>{
     // console.log(resp)
      //this.datos = resp
      //this.estado = false;
    //})
  //}
  //ngOnInit(): void {
  //  this.api.getAllPatients().subscribe(data =>{
   // this.pacientes=data;
    
  //})
  //localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM1ODM1OTExMzJlNDAwMTc2YjliNWQiLCJpYXQiOjE2MDY3Nzk3NDcsImV4cCI6MTYwNjgyMjk0N30.-75xXat510nShqQ2qcRq8C2jPL9vdejlic7F8PS8L1w");
  //   this.router.navigate(['post']);
  //}
  //showDatos(){
    //return this.estado= !this.estado;
  //}
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
