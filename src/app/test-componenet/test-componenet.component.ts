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
  currentMonth: number = Number(moment().format('M'));

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
  }

}
