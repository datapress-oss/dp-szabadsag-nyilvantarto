import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  faUser = faUser;

  onLogOut(): void {
    this.auth.logOut();
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {

  }

}
