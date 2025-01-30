import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/service/validator.service';
import { EmailValidator } from '../../../shared/service/email.validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  //Aaron.
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidator,
  ){}

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    // email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], new EmailValidator()],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], this.emailValidator],
    username:['',[Validators.required, this.validatorService.canBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  })


  isValidField(field:string){
    return this.validatorService.isValidField(this.myForm,field);
  }

  //ngSubmit
  onSubmit():void{
    this.myForm.markAllAsTouched();
  }
}
