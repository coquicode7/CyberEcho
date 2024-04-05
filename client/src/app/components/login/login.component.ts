import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Perform the login action
    }
  }

  navigateToChannels() {
    // Your logic here
    this.router.navigate(['channels']);
  }

  navigateToRegister() {
    // Your logic here
    this.router.navigate(['register']);
  }

  navigateToForgotPassword() {
    // Your logic here
    this.router.navigate(['/your-component-path']);
  }
}
