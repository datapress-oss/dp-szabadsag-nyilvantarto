import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Year } from './../classes/calendarClasses';
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
  selectedMonth: number;
  currentView = 'month';
  preSelectedMonth: string;

  constructor() {}


  // handle emitted event from year-view.component
  monthSelectEventHandler($event: number): void {
    this.selectedMonth = $event;
    // when a month id selected, show that month as a calendar
    this.currentView = 'month';
  }

  // handle emitted event from month-view.component
  selectNewMonthEventHandler($event: string): void {
    this.preSelectedMonth = $event;
    // when clicked on the month's name, allow selection from all 12 months
    this.currentView = 'year';
  }

  // handle emitted event from month-view.component
  selectNewDayEventHandler($event: Array<object>): void {
    console.log($event);
  }

  ngOnInit(): void {
    // set the default month to be the current month
    this.selectedMonth = this.currentMonth;
  }

}
