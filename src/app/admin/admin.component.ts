import { Component, OnInit } from '@angular/core';
import { CustomeDay } from './../classes/calendarClasses';
import * as moment from 'moment';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // mock data for datepickers
  freeDaysMock: Array<CustomeDay> = [{
    date: moment('2020-11-22'),
    description: 'teszt szabadnap'
  }];
  workDaysMock: Array<CustomeDay> = [{
    date: moment('2020-11-21'),
    description: 'teszt munkanap'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
