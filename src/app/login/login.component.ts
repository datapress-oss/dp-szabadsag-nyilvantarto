import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernameInput: string;
  passwordInput: string;
  userLoginForm = new FormGroup({
    usernameInput: new FormControl(),
    passwordInput: new FormControl(),
  });


  onLogIn(): void {
    this.auth.logIn(this.userLoginForm.value.usernameInput, this.userLoginForm.value.passwordInput);

  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('loggedInUser') === null) {
      return false;
    }
    return true;
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.isLoggedIn());
  }

}
