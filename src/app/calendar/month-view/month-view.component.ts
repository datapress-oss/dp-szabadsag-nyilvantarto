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
  weekdays: Array<string> = moment.weekdaysShort();

  // emits the current month to calendar.component
  onMonthClick(month: string): void {
    this.selectNewMonth.emit(month);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
