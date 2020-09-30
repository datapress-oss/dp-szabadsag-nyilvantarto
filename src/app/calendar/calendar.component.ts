import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Day} from './../classes/calendarClasses'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() title: String
  @Input() weeks: Array<Array<Day>>
  @Input() weekdays: Array<String>
  @Output() dayClickEvent = new EventEmitter<Day>();

  onDayClick(day: Day) {
    this.dayClickEvent.emit(day)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
