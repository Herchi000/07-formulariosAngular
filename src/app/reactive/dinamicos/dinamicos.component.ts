import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  
  
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['DEATH stranding', Validators.required],
    ], Validators.required)
    
  })
  
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray; //Asignandole el tipo FormArray para que no salga error al llamar a su propiedad controls
  }

  constructor(private fb: FormBuilder) { }

  campoInvalido(campo: string){
    return this.miFormulario.controls[`${campo}`].errors && this.miFormulario.touched;
    
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) { return; }

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();

  }

  borrar(index: number){
    this.favoritosArr.removeAt(index);
  }

  guardar(){
    if(this.miFormulario.invalid){      
      this.miFormulario.markAllAsTouched()

      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
