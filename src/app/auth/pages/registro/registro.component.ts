import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern) ] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider ] ],


  })


  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Emanuel Fernández',
      email: 'test1@gmail.com',
      username: 'EmaWing'
    })
  }


  campoInvalido(campo: string){
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched
  }


  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
    
  }

}
