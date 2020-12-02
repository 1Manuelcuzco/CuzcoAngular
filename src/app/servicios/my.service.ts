import { Injectable } from '@angular/core';
import{LoginI} from '../../app/modelos/login.interface';
import{ ResponseI} from '../../app/modelos/response.interface';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{ListapacientesI} from '../../app/modelos/listapacientes.interface';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //url='http://localhost:3000/api/'
  url ='https://jsonplaceholder.typicode.com/posts'
  constructor(
    private http: HttpClient
  ){
    console.log('servicio per')
  }
  //loginByEmail(form:LoginI):Observable<ResponseI>{
  //  let direccion = this.url +"login";
  //  return this.http.post<ResponseI>(direccion,form);
  //}
  getDatos(){
    let header = new HttpHeaders().set('Type-content','aplication/json')
    return this.http.get(this.url, {
      headers:header
    })
  }
  //getAllPatients():Observable<ListapacientesI[]>{
  //  let direccion = this.url+ "pacientes";
  //  return this.http.get<ListapacientesI[]>(direccion);
  //}
}
