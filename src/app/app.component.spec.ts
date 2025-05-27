import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InactivityService } from './Services/inactivity.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        ReactiveFormsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: InactivityService,
          useValue: { onInactivity: of() }  // mock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form and set isLoading to true after submit', fakeAsync(() => {
    // Arrange
    component.userForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      address: '123 Test St'
    });

    // Act
    component.submitForm();
    expect(component.isLoading).toBeTrue();

    // Simulate timeout
    tick(2000);
    fixture.detectChanges();

    // Assert
    expect(component.isLoading).toBeFalse();
  }));

  it('should keep form invalid if fields are empty', () => {
    component.userForm.setValue({
      name: '',
      email: '',
      address: ''
    });

    expect(component.userForm.invalid).toBeTrue();
  });
});
