import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Month, Day} from './../classes/calendarClasses'
import * as moment from 'moment'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() month: Month
  @Output() dayClickEvent = new EventEmitter<Day>();
  dayTags: Array<string> = ['Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo', 'Va'];

  onDayClick(day: Day) {
    this.dayClickEvent.emit(day)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
