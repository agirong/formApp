import { FormControl, ValidationErrors } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//Regresar un mensaje de error
export const canBeStrider= (control: FormControl):ValidationErrors | null =>{

  const user:string = control.value.trim().toLowerCase();

  if(user === 'strider'){
    return{
      noStrider:true,
    }
  }

  return null;

}
