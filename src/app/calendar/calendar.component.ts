import { Component, OnInit, Input } from '@angular/core';
import {Year} from './../classes/calendarClasses'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() yearCalendarObj: Year

  constructor() {

  }

  ngOnInit(): void {
    console.log("Calendar year from parent in calendar component")
    console.log(this.yearCalendarObj)
  }

}
