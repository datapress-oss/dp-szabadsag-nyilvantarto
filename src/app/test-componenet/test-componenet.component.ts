import { Component, OnInit } from '@angular/core';
import {DateManagerService} from './../date-manager.service';
import * as moment from 'moment';
import {Year} from './../classes/calendarClasses';

@Component({
  selector: 'app-test-componenet',
  templateUrl: './test-componenet.component.html',
  styleUrls: ['./test-componenet.component.scss']
})
export class TestComponenetComponent implements OnInit {
  currentYearCalendar: Year;
  freeDays: Array<object> = [];
  workDays: Array<object> = [];

  // handle new FreeDay event
  newFreeDayEventHandler($event: object): void {
    this.freeDays.push($event);
    console.log('Szabadnapok: ');
    console.log(this.freeDays);
  }

  // handle new WorkDay event
  newWorkDayEventHandler($event: object): void {
    this.workDays.push($event);
    console.log('Munkanapok: ');
    console.log(this.workDays);
  }

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
  }

}
