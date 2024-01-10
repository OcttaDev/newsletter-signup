import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app-signup.component.html',
  styleUrl: './app-signup.component.css',
})
export class AppSignupComponent {
  router = inject(Router);

  checkEmail = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  showAlert = '';
  input = '';

  emailSuccess() {
    let email: string = this.checkEmail.value.email ?? '';

    let checkSuccess = email.includes('@gmail.com');

    if (checkSuccess) {
      this.router.navigateByUrl('/success');
      localStorage.setItem('@userdetail', email);
    } else {
      this.input = 'inputError';
      this.showAlert = 'showAlert';
      setInterval(() => {
        this.input = '';
        this.showAlert = '';
        this.checkEmail.reset();
      }, 2000);
    }
  }
}
