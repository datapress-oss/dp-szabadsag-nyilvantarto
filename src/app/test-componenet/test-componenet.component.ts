import { Component, OnInit } from '@angular/core';
import {DateManagerService} from './../date-manager.service';
import * as moment from 'moment';
import {Year, CustomeDay} from './../classes/calendarClasses';

@Component({
  selector: 'app-test-componenet',
  templateUrl: './test-componenet.component.html',
  styleUrls: ['./test-componenet.component.scss']
})
export class TestComponenetComponent implements OnInit {
  currentYearCalendar: Year;
  freeDaysMock: Array<CustomeDay> = [{
    date: moment('2020-11-22'),
    description: 'teszt szabadnap'
  }];
  workDaysMock: Array<CustomeDay> = [{
    date: moment('2020-11-21'),
    description: 'teszt munkanap'
  }];

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
  }

}
