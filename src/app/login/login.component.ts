import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernameInput: string;
  passwordInput: string;


  onLogIn(): void {
    this.auth.logIn(this.usernameInput, this.passwordInput);
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }

}
