import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/service/validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
  ){}

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username:['',[Validators.required, this.validatorService.canBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  })


  isValidField(field:string){
    this.validatorService.isValidField(this.myForm,field);
  }

  //ngSubmit
  onSubmit():void{
    console.log('onSubmit')
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('onSubmit')
  }
}
