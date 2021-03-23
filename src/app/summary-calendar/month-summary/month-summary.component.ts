import { Component, OnInit, Input } from '@angular/core';
import { Employee, mockEmployees } from './../../classes/summaryClasses';
import { DateManagerService } from './../../date-manager.service';
import { Year, Day } from './../../classes/calendarClasses';
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

  // combine the arrays inside 'weeks' array into one array
  combineWeeksToDays(weeks: any): Array<Day> {
    const days: Array<Day> = [];
    weeks.forEach((week: any) => {
      week.forEach((day: Day) => {
        if (day !== undefined) {
          days.push(day);
        }
      });
    });
    return days;
  }

  // get length of employee name
  getEmployeeNameLength(name: string): number {
    return name.length;
  }

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

  constructor(public dateManager: DateManagerService) {}

  ngOnInit(): void {
  }

}
