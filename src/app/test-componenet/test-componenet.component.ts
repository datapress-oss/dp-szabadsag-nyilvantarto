import { Component, OnInit } from '@angular/core';
import {DateManagerService} from './../date-manager.service';
import * as moment from 'moment';
import {Year} from './../classes/calendarClasses';

@Component({
  selector: 'app-test-componenet',
  templateUrl: './test-componenet.component.html',
  styleUrls: ['./test-componenet.component.scss']
})
export class TestComponenetComponent implements OnInit {
  currentYearCalendar: Year;

  // handle new FreeDay event
  newFreeDayEventHandler($event: Date): void {
    console.log(`Új szabadnap: ${$event}`);
  }

  newWorkDayEventHandler($event: Date): void {
    console.log(`Új munkanap: ${$event}`);
  }

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
    console.log(this.currentYearCalendar);
  }

  ngOnInit(): void {
  }

}
