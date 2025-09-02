import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(email: string, password: string): boolean {
    const users = this.userService.getUsers();

    const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    const user = users.find(u => u.email === email && u.password === hash);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(user: User): boolean {
    const users = this.userService.getUsers();
    const exists = users.some(u => u.email === user.email);

    if (exists) {
      return false;
    }

    user.password = CryptoJS.SHA256(user.password).toString(CryptoJS.enc.Hex);

    users.push(user);
    this.userService.saveUsers(users);
    return true;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
