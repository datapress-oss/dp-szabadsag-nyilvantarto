import { Injectable } from '@angular/core';
import { User, role, LoggedInUser, Users } from './classes/user';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: LoggedInUser = {
    username: null,
    roles: []
  };
  isLoggedIn = false;
  private userLogInEvent = new BehaviorSubject<LoggedInUser>(null);

  logIn(username: string, password: string): boolean {
    // compare input with stored data
    const foundUser = Users.find(
      user => user.username === username && user.password === password
    );
    if (foundUser !== undefined) {
      // success
      this.loggedInUser.username = foundUser.username;
      this.loggedInUser.roles = foundUser.roles;
      this.isLoggedIn = true;
      // emit login event with 'loggedInUser'
      this.userLogInEvent.next(this.loggedInUser);
      this.router.navigate(['/user']);
      return true;
    }
    return false;
  }


  logOut(): void {
    // remove loggedInUser data
    this.loggedInUser.username = null;
    this.loggedInUser.roles = null;
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  userLogInEventListener(): Observable<LoggedInUser> {
    return this.userLogInEvent.asObservable();
  }

  constructor(private router: Router) {}
}
