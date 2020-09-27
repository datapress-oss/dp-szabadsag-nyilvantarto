import { Component } from '@angular/core';
import {DateManagerService} from './date-manager.service'
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYearCalendar = this.dateManager.createCalendar(moment().year());

  constructor(private dateManager: DateManagerService) {
    console.log('Calendar for the current year:');
    console.log(this.currentYearCalendar);

  }
}
