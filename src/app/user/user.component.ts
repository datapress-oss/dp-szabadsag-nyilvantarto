import { Component, OnInit } from '@angular/core';
import { DateManagerService } from './../date-manager.service';
import * as moment from 'moment';
import { Year } from './../classes/calendarClasses';
import { mockEmployees, Employee } from './../classes/summaryClasses';
import { mockHolidays, Holiday } from './../classes/holiday';
import { AuthService } from './../auth.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  mockHolidays = mockHolidays;
  currentYearCalendar: Year;
  currentUser: Employee;

  public userAcceptEventHandler(holydayOutput: Holiday): void {
    console.log('user holiday accept event');
    console.log(holydayOutput);
  }

  public userCancelEventHandler(holydayOutput: Holiday): void {
    console.log('user holiday cancel event');
    console.log(holydayOutput);
  }

  constructor(private dateManager: DateManagerService, private auth: AuthService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
    // find current employee based on the loggedIn user
    this.currentUser = mockEmployees.find(
      user => user.name === this.auth.loggedInUser.username
    );
  }
}
