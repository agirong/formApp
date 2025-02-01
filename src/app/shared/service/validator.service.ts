import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  //Regresar un mensaje de error
  public canBeStrider= (control: FormControl):ValidationErrors | null =>{

    const user:string = control.value.trim().toLowerCase();

    if(user === 'strider'){
      return{
        noStrider:true,
      }
    }
    return null;
  }

  public isValidField(form:FormGroup, field: string){
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2: string){
    return (formGroup: FormGroup): ValidationErrors | null => {
      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if(pass1 !== pass2){
        formGroup.get(field2)?.setErrors({ notEqual: true})
        return { notEqual: true}
      }
      formGroup.get(field2)?.setErrors(null)
      return null; // No hay errores
    }
  }

}
