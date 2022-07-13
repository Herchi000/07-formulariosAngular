import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  //guardar(miFormulario: NgForm){
  guardar(){
    // console.log(Number(this.miFormulario?.controls['precio']?.value));
    console.log('Poste correcto');

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });

    
    
  }

  nombreValido() :Boolean{
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido() :Boolean{
    return this.miFormulario?.controls['precio']?.touched &&
           this.miFormulario?.controls['precio']?.value <= 0 ;
  }


}
