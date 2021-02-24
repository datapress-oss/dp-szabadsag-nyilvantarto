import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { DayStatus } from './../../classes/calendarClasses';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthViewComponent implements OnInit {
  @Input() rows: [][];
  @Input() monthTitle: string;
  @Output() selectNewDay = new EventEmitter<Array<object>>();
  weekdays: Array<string> = moment.weekdaysMin(true);
  @Input() userSelectedDays: Array<object> = [];
  @Input() disabled = false;
  dateFormat = 'YYYY-MM-DD';
  dayStatus = DayStatus;

  // emits the selected day to calendar.component
  onDayClick(day: object): void {
    if (this.userSelectedDays.includes(day)) {
      // remove the selected day if it was clicked a 2nd time
      delete this.userSelectedDays[this.userSelectedDays.indexOf(day)];
    }
    else {
      // add the selected day if it was clicked the 1st time
      this.userSelectedDays.push(day);
    }
    this.selectNewDay.emit(this.userSelectedDays);
  }

  // checks wether a day is 1 digit or 2, for styling
  is1CharLong(day: object): boolean {
    const formattedDay = moment(day).format('D');
    switch (formattedDay.length) {
      case 1:
        return true;
      case 2:
        return false;
      default:
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
