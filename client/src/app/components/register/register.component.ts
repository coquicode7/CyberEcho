import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;



  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      displayName: ['', Validators.maxLength(32)],
      username: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Perform the login action
    }
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }

  navigateToLogin() {
    // Your logic here
    this.router.navigate(['']);
  }

  navigateToForgotPassword() {
    // Your logic here
    this.router.navigate(['/your-component-path']);
  }
}
