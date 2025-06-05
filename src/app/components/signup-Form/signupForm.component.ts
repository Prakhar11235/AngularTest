// src/app/components/signup.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MyCustomPipe } from '../../pipes/my-custom.pipe';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, MatProgressSpinnerModule, CommonModule,MyCustomPipe,NgOptimizedImage],
  templateUrl:'./signupForm.component.html',
  styleUrl: '../../app.component.scss'
})
export class SignupComponent implements OnInit {
  router = inject(Router);
  fb = inject(FormBuilder);

  isLoading = false;

  ngOnInit(){

  }

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(5)]],
  });

  submitForm() {
    if (this.userForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigateByUrl('/home');
      }, 2000);
    }
  }
}
