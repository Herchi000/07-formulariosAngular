import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego = '';
  persona: Persona = {
    nombre: 'Emanuel',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'DeathStrading'},
     
    ]
  }


  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }


  guardar(){
    console.log(this.miFormulario.form.controls['nombre']);
    
  }


}
