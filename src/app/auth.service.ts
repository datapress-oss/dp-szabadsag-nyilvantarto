import { Injectable } from '@angular/core';
import { User, role, LoggedInUser, Users } from './classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: LoggedInUser = {
    username: null,
    roles: []
  };

  logIn(username: string, password: string): boolean {
    // compare input with stored data
    Users.forEach((user: User) => {
      if (username === user.username && password === user.password) {
        // success
        this.loggedInUser.username = user.username;
        this.loggedInUser.roles = user.roles;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
        this.router.navigate(['/test']);
        return true;
      }
    });
    return false;
  }

  logOut(): void {
    // remove loggedInUser data
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  constructor(private router: Router) {}
}
