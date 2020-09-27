import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as Calendar from './classes/calendarClasses'

@Injectable({
  providedIn: 'root'
})
export class DateManagerService {

  public createCalendar(
    requestedYear: number, // = moment().year(),
  ): Calendar.Year {
    const actualDate = moment(new Date(requestedYear, 0, 1));

    const weekdays = moment.weekdaysMin(true);
    const calendar: Calendar.Year = {
      year: actualDate.clone(),
      weekdays,
      months: [],
    };

    for (let index = 0; index < 12; index++) {
      calendar.months.push(
        this.generateMonthCalendar(actualDate.clone())
      );

      actualDate.add(1, 'month');
    }

    return calendar;
  }

  private generateMonthCalendar(date: moment.Moment): Calendar.Month {
    const monthCalendar: Calendar.Month = {
      title: date.format('MMMM')
    };
    return monthCalendar;
  }

  constructor() {
    moment.locale('hu');
  }
}
