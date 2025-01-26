import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder){}

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(customValidators.emailPattern)]],
    username:['',[Validators.required, customValidators.canBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  })


  isValidField(field:string){
    // TODO: Obterner validación desde un servicio.
  }

  //ngSubmit
  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
  }

}
