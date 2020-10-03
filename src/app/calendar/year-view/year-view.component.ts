import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearViewComponent implements OnInit {
  // array of months' names
  months: Array<string> = moment.months();
  @Output() selectedMonth = new EventEmitter<number>();
  @Input() preSelectedMonth: string;
  @Input() currentMonth: number;


  // click event handler for selecting a month
  onMonthClick(month: string): void {
    this.selectedMonth.emit(Number(moment().month(month).format('M')));
  }

  currentMonthToStr(): string {
    return moment.months(this.currentMonth - 1);
  }

  constructor() {}

  ngOnInit(): void {}

}
