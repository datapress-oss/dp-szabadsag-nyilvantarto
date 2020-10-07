import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthViewComponent implements OnInit {
  @Input() rows: [][];
  @Input() monthTitle: string;
  @Output() selectNewMonth = new EventEmitter<string>();
  @Output() selectNewDay = new EventEmitter<Array<object>>();
  weekdays: Array<string> = moment.weekdaysShort();
  selectedDays: Array<object>;

  // emits the current month to calendar.component
  onMonthClick(month: string): void {
    this.selectNewMonth.emit(month);
  }

  // emits the selected day to calendar.component
  onDayClick(day: object): void {
    if (this.selectedDays.includes(day)) {
      // remove the selected day if it was clicked a 2nd time
      delete this.selectedDays[this.selectedDays.indexOf(day)];
    }
    else {
      // add the selected day if it was clicked the 1st time
      this.selectedDays.push(day);
    }
    this.selectNewDay.emit(this.selectedDays);
  }

  constructor() {
    // array must have a default value befure used in a method
    this.selectedDays = [];
  }

  ngOnInit(): void {
  }

}
