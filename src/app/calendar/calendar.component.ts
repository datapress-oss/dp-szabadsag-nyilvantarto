import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Month, Year } from './../classes/calendarClasses';
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
  @Input() calendarMonth: Month;
  @Input() outputOnly = false;

  constructor() {}

  // handle emitted event from month-view.component
  selectNewDayEventHandler($event: Array<object>): void {
    console.log($event);
  }

  ngOnInit(): void {}

}
