import { Component } from '@angular/core';
import {DateManagerService} from './date-manager.service'
import * as moment from 'moment'
import {Year} from './classes/calendarClasses'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYearCalendar: Year;

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }
}
