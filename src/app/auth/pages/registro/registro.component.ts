import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required, ] ],
    
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  get emailErrorMsg() {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']) {
      return 'El email es obligatorio'
    } else if( errors?.['pattern']){
      return 'No tiene formato de correo electronico'
    } else if(errors?.['emailTomado']){
      return 'El correo electronico ya esta en uso'
    }

    return ''
  }


  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Emanuel Fernandez',
      email: 'test1@test.com',
      username: 'EmaWing',
      password: '123456',
      password2: '123456',

    })
  }


  campoInvalido(campo: string){
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched
  }


  // emailRequired() {
  //   return this.miFormulario.get('email')?.errors?.['required']
  //   && this.miFormulario.get('email')?.touched
  // }

  // emailFormato() {
  //   return this.miFormulario.get('email')?.errors?.['pattern']
  //   && this.miFormulario.get('email')?.touched
  // }

  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.['emailTomado']
  //   && this.miFormulario.get('email')?.touched
  // }


  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
    
  }

}
