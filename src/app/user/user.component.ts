import { Component, OnInit } from '@angular/core';
import { DateManagerService } from './../date-manager.service';
import * as moment from 'moment';
import { Year } from './../classes/calendarClasses';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentYearCalendar: Year;

  constructor(private dateManager: DateManagerService) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {}

}
