import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../../auth.service';
import { LoggedInUser } from './../../classes/user';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  faUser = faUser;
  isLoggedIn: boolean;
  username: string;

  onLogOut(): void {
    this.isLoggedIn = false;
    this.auth.logOut();
  }

  private setUser(): void {
    this.isLoggedIn = true;
    // get latest user obj from localStorage
    const user: LoggedInUser  = JSON.parse(localStorage.getItem('loggedInUser'));
    this.username = user.username;
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
