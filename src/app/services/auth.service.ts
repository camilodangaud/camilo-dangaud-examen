import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(email: string, password: string): boolean {
    const users = this.userService.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

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
