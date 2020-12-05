import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { LoggedInUser, role } from './../classes/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: LoggedInUser;

  private setUser(): void {
    this.isLoggedIn = true;
    // get latest user obj from localStorage
    const user: LoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUser = user;
  }

  public logOutEventHandler(): void {
    // clean user values
    this.isLoggedIn = false;
    this.loggedInUser.username = null;
    this.loggedInUser.roles = [];
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {

    if (this.auth.isLoggedIn()) {
      // set user if already logged in
      this.setUser();
    }
    this.auth.userLogInEventListener().subscribe(userLogIn => {
      // skip userLogIn with value of null
      if (userLogIn !== null) {
        // set user on every new log in event
        this.setUser();
      }
    });
  }

}
