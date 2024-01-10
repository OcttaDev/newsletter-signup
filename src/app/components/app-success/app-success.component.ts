import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-success',
  standalone: true,
  imports: [],
  templateUrl: './app-success.component.html',
  styleUrl: './app-success.component.css',
})
export class AppSuccessComponent {
  user = localStorage.getItem('@userdetail');
  router = inject(Router);
  returnRegister() {
    this.router.navigateByUrl('/');
  }
}
