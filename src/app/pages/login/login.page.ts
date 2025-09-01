import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
    standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    // Aquí validas las credenciales
    if (this.email === 'jane@doe.com' && this.password === '123456') {
      console.log('Login correcto');
      this.router.navigate(['/home']); 
    } else {
      console.log('Credenciales incorrectas');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
}
