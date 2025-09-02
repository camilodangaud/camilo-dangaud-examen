import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private storageKey = 'users';

  getUsers(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveUsers(users: User[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  clearUsers(): void {
    localStorage.removeItem(this.storageKey);
  }
}
