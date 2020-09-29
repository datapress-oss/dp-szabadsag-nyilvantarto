import { Component } from '@angular/core';
import {DateManagerService} from './date-manager.service'
import * as moment from 'moment'
import {Year, Day} from './classes/calendarClasses'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYearCalendar: Year;
  lastClickedDay: Day

  daySelectEventHandler($event: Day) {
    this.lastClickedDay = $event
    console.log(`Erre a napra kattintottál: ${this.lastClickedDay.date.format('YYYY MMM D')}`)
  }

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }
}
