import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormArray,FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validator, Validators} from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // userForm! : FormGroup;
  // constructor(private formBuilder: FormBuilder){
  //   this.userForm=this.formBuilder.group({
  //     name:['',Validators.required, Validators.minLength(2)],
  //     email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
  //     address:this.formBuilder.group({
  //       street:['',Validators.required,Validators.minLength(6)],
  //       city:['',Validators.required,Validators.minLength(4)]
  //     }),

  //   })
  // }
  userForm: FormGroup=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
    ]),
    address: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ])
  })
  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      console.log(this.userForm.value.name);
    }
  }
}
