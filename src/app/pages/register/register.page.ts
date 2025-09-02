import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  name = '';
  lastName = '';
  email = '';
  password = '';

  countries = [
    { label: '🇨🇴 Colombia', value: { id: 'Colombia', value: '🇨🇴 Colombia' } },
    { label: '🇲🇽 México', value: { id: 'México', value: '🇲🇽 México' } },
    { label: '🇦🇷 Argentina', value: { id: 'Argentina', value: '🇦🇷 Argentina' } },
    { label: '🇨🇱 Chile', value: { id: 'Chile', value: '🇨🇱 Chile' } },
    { label: '🇪🇸 España', value: { id: 'España', value: '🇪🇸 España' } },
  ];

  country = this.countries[0].value;
  
  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const newUser: User = {
      id: uuidv4(),
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      country: this.country
    };

    const success = this.authService.register(newUser);

    if (success) {
      alert('Usuario registrado correctamente');
      this.router.navigate(['/login']);
    } else {
      alert('El correo ya está registrado');
    }
  }
}
