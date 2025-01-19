import { FormControl } from "@angular/forms";

//Regresar un mensaje de error
export const canBeStrider= (control: FormControl) =>{

  const user:string = control.value.trim().toLowerCase();

  if(user === 'strider'){
    return{
      noStrider:true,
    }
  }

  return null;

}
