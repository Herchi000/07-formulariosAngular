import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080 ti'),
  //   precio: new FormControl(250000),
  //   existencias: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)]  ],

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 2080ti',
      precio: 1600,
      existencias: 5
    })
  }

  campoInvalido(campo: string){
    return this.miFormulario.controls[`${campo}`].errors && this.miFormulario.touched;
  }


  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()

      return
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }


}
