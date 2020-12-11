import { Component, OnInit } from '@angular/core';
import { DateManagerService } from './../date-manager.service';
import * as moment from 'moment';
import { Year } from './../classes/calendarClasses';
import { mockEmployees, Employee } from './../classes/summaryClasses';
import { LoggedInUser } from './../classes/user';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentYearCalendar: Year;
  currentUser: Employee;

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
    // dind current employee obj
    const loggedInUser: LoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    mockEmployees.forEach(employee => {
      if (loggedInUser.username === employee.name) {
        this.currentUser = employee;
      }
    });
  }

}
