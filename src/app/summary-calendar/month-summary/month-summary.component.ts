import { Component, OnInit, Input } from '@angular/core';
import { DayStatus, Employee, mockEmployees } from './../../classes/summaryClasses';
import * as moment from 'moment';

@Component({
  selector: 'app-month-summary',
  templateUrl: './month-summary.component.html',
  styleUrls: ['./month-summary.component.scss']
})
export class MonthSummaryComponent implements OnInit {
  @Input() year: number;
  @Input() selectedMonth: number;
  @Input() employees: Array<Employee>;

  // returns an array which size equals with the number of days in the selected month
  daysInMonth(): Array<number> {
    const numOfDays = moment().month(this.selectedMonth).daysInMonth();
    const days = Array(numOfDays).fill(numOfDays);
    return days;
  }

  nameOfTheDay(day: number): string {
    // js Date month works with 1-12 scale, so add +1 to 'selectedMonth'
    // give moment() a js Date object, to avoid 'RFC2822 or ISO format' warning
    const rawDate = new Date(`${this.year}-${this.selectedMonth + 1}-${day}`);
    const name = moment(rawDate).format('dd');
    return name;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
