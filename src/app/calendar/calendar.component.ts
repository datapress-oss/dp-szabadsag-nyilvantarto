import { Component, OnInit, Input } from '@angular/core';
import {Month, Day} from './../classes/calendarClasses'
import * as moment from 'moment'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() month: Month

  public toMomentDay(dayDate) {
    return dayDate.format('D')
  }

  private eventTest(input) {
    console.log(input)
  }


  constructor() {
  }

  ngOnInit(): void {
    console.log(moment(this.month.weeks[0][6].date).format('E'))
    console.log(this.month.weeks);

  }

}
