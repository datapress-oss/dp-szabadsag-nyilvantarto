import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Year } from './../classes/calendarClasses';
import { CustomeDay } from './../classes/modifiedDay';
import * as animation from './../animations';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
  animation.fadeAnimation,
  animation.fadeAnimation2
  ]

})
export class CalendarComponent implements OnInit {
  @Input() calendarYear: Year;
  @Input() currentMonth: number;
  @Input() freeDays: Array<CustomeDay> = [];
  @Input() workDays: Array<CustomeDay> = [];
  @Input() outputOnly = false;

  constructor() {}

  // handle emitted event from month-view.component
  selectNewDayEventHandler($event: Array<object>): void {
    console.log($event);
  }

  ngOnInit(): void {}

}
