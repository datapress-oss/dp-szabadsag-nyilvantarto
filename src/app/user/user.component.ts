import { Component, OnInit } from '@angular/core';
import { DateManagerService } from './../date-manager.service';
import * as moment from 'moment';
import { Year } from './../classes/calendarClasses';
import { mockEmployees, Employee } from './../classes/summaryClasses';
import { LoggedInUser } from './../classes/user';
import { AuthService } from './../auth.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentYearCalendar: Year;
  currentUser: Employee;

  constructor(private dateManager: DateManagerService, private auth: AuthService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
    // find current employee based on the loggedIn user
    this.currentUser = mockEmployees.find(
      user => user.name === this.auth.loggedInUser.username
    );
    console.log(this.currentUser);
  }
}
