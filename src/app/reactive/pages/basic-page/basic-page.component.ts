import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 ={
  name:'RTX 5090',
  price:809809,
  inStorage:2
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{
  //Importar ReactiveFormsModule para usar sus directivas.
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  public myForm:FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    price:[0, [Validators.required, Validators.min(0)]],
    inStorage:[0, [Validators.required, Validators.min(0)]],
  })

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

  onSave():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)

    //Reestablecer los valores al formulario
    this.myForm.reset(
      {
        name:'Nombre del producto',
        price:0,
        inStorage:0,
      }
    )
  }
}
