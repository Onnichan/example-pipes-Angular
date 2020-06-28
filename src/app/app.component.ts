import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre:string = 'capitan América'
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personas:string[] = ['Ironman','Spyderman','Thor','Loki','Groot'];
  PI:number = Math.PI;
  porcentaje:number = 0.2344654;
  salario:number = 1234.5;
  fecha : Date;

  valorPromesa = new Promise<string>(resolve =>{
    setTimeout(()=>{
      resolve('llego la data');
    },4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primavera',
      casa: 20
    }
  }

  constructor(){
    this.fecha = new Date();
  }
}
