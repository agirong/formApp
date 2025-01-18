import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  constructor(private fb:FormBuilder){}

  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required],
    ])
  })

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

   //Funcion para validar si hay errores en los campos
   isValidField(field:string): boolean | null{
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  getFiedlError(field:string):string | null{
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {}

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  //Funcion para validar si hay errores en los campos del formArray
  isValidFieldInArray(fromArray:FormArray, index: number){
    return fromArray.controls[index].errors
    && fromArray.controls[index].touched;
  }

  onDeleteFavorite(index:number):void{
    this.favoriteGames.removeAt(index);
  }

  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
    this.myForm.reset();
  }
}
