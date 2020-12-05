import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() logOutEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  faUser = faUser;

  onLogOut(): void {
    this.logOutEvent.emit(false);
    this.auth.logOut();
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
