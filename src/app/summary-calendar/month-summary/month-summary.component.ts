import { Component, OnInit, Input } from '@angular/core';
import { Employee, mockEmployees, nonWorkDays, extraWorkDays } from './../../classes/summaryClasses';
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

  // check if current day is a leave day or not
  isLeaveDay(day: number, employee: number): boolean {
    const rawDate = new Date(`${this.year}-${this.selectedMonth + 1}-${day}`);
    const momentDate = moment(rawDate);

    for (const leaveDate of mockEmployees[employee].leaveDates) {
      const isLeaveDay = momentDate.format('YYYY-MM-DD') === leaveDate.format('YYYY-MM-DD');
      if (isLeaveDay) {
        return true;
      }
    }
    return false;
  }

  // check if current day is a nonWork day or not
  isNonWorkDay(day: number): boolean {
    const rawDate = new Date(`${this.year}-${this.selectedMonth + 1}-${day}`);
    const momentDate = moment(rawDate);

    for (const nonWorkDay of nonWorkDays) {
      const isNonWorkDay = momentDate.format('YYYY-MM-DD') === nonWorkDay.format('YYYY-MM-DD');
      if (isNonWorkDay) {
        return true;
      }
    }
    return false;
  }

  // check if current day is weekend or not
  isWeekend(day: number): boolean {
    const rawDate = new Date(`${this.year}-${this.selectedMonth + 1}-${day}`);
    const momentDate = moment(rawDate);

    if (momentDate.weekday() === 5 || momentDate.weekday() === 6) {
      // return true if day is Saturday or Sunday (0-6 scale)
      return true;
    }
    else {
      return false;
    }
  }

  // check if current day is an extra work day or not
  isExtraWorkDay(day: number): boolean {
    const rawDate = new Date(`${this.year}-${this.selectedMonth + 1}-${day}`);
    const momentDate = moment(rawDate);

    for (const extraWorkDay of extraWorkDays) {
      const isextraWorkDay = momentDate.format('YYYY-MM-DD') === extraWorkDay.format('YYYY-MM-DD');
      if (isextraWorkDay) {
        return true;
      }
    }
    return false;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
