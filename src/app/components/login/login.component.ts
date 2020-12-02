import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import {DatosService} from '../../../app/servicios/my.service';
import {LoginI} from '../../../app/modelos/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  constructor(private api:DatosService) { }

  ngOnInit(): void {
  }
  //onLogin(form:LoginI){
   // this.api.loginByEmail(form).subscribe(data =>{
     // console.log(data)
    //});
    
  //}
}
