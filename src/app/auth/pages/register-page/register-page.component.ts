import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder){}

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    username:['',[Validators.required]],
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
