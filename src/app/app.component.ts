import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { InactivityService } from './Services/inactivity.service';
import { MyCustomPipe } from './pipes/my-custom.pipe';
// import { DummyService } from './Services/dummy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    NgFor,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    AlertDialogComponent,
    CommonModule,
    MyCustomPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading = false;
  // private dummyService = inject(DummyService);

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  dialog = inject(MatDialog);
  inactivityService = inject(InactivityService);

  ngOnInit(): void {
    this.inactivityService.onInactivity.subscribe(() => {
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Inactive',
          message: 'You will be logged out in 2 minutes'
        }
      });
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      this.isLoading = true;
      console.log('Submitted:', this.userForm.value);
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }

  // callSuccessApi() {
  //   this.dummyService.getSuccessData().subscribe({
  //     next: (res) => console.log('Success:', res),
  //     error: (err) => console.error('Error:', err)
  //   });
  // }

  // callFailApi() {
  //   this.dummyService.getFailData().subscribe({
  //     next: (res) => console.log('This should not happen for error'),
  //     error: (err) => console.error('Caught error:', err)
  //   });
  // }
}
