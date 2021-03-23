import { Component, OnInit } from '@angular/core';
import { DateManagerService } from './../date-manager.service';
import { mockEmployees, Employee } from './../classes/summaryClasses';
import { AggregatedLeavesService } from './../aggregated-leaves.service';
import { Holiday } from './../classes/aggregatedLeave';
import { AuthService } from './../auth.service';
import { faUndo, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  faUndo = faUndo;
  faSave = faSave;
  // TODO: use a get method to get holydays (inside aggregated-leaves.service)
  mockHolidays = this.aggregatedLeavesService.aggregatedLeaves[0].holidays;
  currentUser: Employee;

  public userHolidayAcceptEventHandler(holydayOutput: Holiday): void {
    console.log('user holiday accept event');
    console.log(holydayOutput);
  }

  public userHolidayCancelEventHandler(holydayOutput: Holiday): void {
    console.log('user holiday cancel event');
    console.log(holydayOutput);
  }

  public userStateSaveEventHandler(): void {
    console.log('user settings saved to db');
  }

  public userStateDiscardEventHandler(): void {
    console.log('user settings loaded from db');
  }

  constructor(
    public dateManager: DateManagerService,
    private auth: AuthService,
    private aggregatedLeavesService: AggregatedLeavesService
    ) {
  }

  ngOnInit(): void {
    // find current employee based on the loggedIn user
    this.currentUser = mockEmployees.find(
      user => user.name === this.auth.loggedInUser.username
    );
    this.auth.userLogInEventListener().subscribe(event => {
      this.dateManager.setLeaveDates();
      this.dateManager.setYearCalendar();
    });
  }
}
