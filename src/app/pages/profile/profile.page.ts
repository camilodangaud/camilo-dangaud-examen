import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user: User | null = null;
  editing: boolean = false;
  changingPassword: boolean = false;

  // para cambio de contraseña
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.changingPassword = false;
  }

  toggleChangePassword() {
    this.changingPassword = !this.changingPassword;
    this.editing = false;
  }

  saveChanges() {
    if (this.user) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const index = users.findIndex((u: User) => u.id === this.user?.id);

      if (index !== -1) {
        users[index] = this.user;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(this.user));
      }

      this.editing = false;
      alert('Perfil actualizado');
    }
  }

  changePassword() {
    if (!this.user) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex((u: User) => u.id === this.user?.id);

    const hashCurrent = CryptoJS.SHA256(this.currentPassword).toString(CryptoJS.enc.Hex);

    if (this.user.password !== hashCurrent) {
      alert('La contraseña actual no es correcta');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const newHash = CryptoJS.SHA256(this.newPassword).toString(CryptoJS.enc.Hex);
    this.user.password = newHash;

    if (index !== -1) {
      users[index] = this.user;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(this.user));
    }

    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.changingPassword = false;

    alert('Contraseña cambiada correctamente');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
