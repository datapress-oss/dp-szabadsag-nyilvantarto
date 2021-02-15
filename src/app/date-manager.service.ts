import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as Calendar from './classes/calendarClasses';
import { ModifiedDaysService } from './modified-days.service';


@Injectable({
  providedIn: 'root'
})
export class DateManagerService {
  private freeDays: Calendar.MarkedDay[] = [];

  private workDays: Calendar.MarkedDay[] = [];

  public createCalendar(
    requestedYear: number, // = moment().year(),
    withHoliday: boolean = false
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
        this.generateMonthCalendar(actualDate.clone(), withHoliday)
      );

      actualDate.add(1, 'month');
    }

    return calendar;
  }

  private generateMonthCalendar(
    date: moment.Moment,
    withHoliday: boolean = false
  ): Calendar.Month {
    //console.log('datttte', date);
    const monthCalendar: Calendar.Month = {
      title: date.format('MMMM'),
      weeks: this.generateWeeksOfMonth(date, withHoliday),
    };
    return monthCalendar;
  }
  private generateWeeksOfMonth(
    date: moment.Moment,
    withHoliday: boolean
  ): Calendar.Week[] {
    const lastDayInWeek = 7;
    const weeks: Calendar.Week[] = [];
    const actualDate = date.clone();
    const numberOfCalendarRow = this.getNumberOfMonthWeeks(actualDate.clone());

    let firstDayPosition = actualDate.weekday();
    let dayCounter = 1;
    for (let week = 0; week < numberOfCalendarRow; week++) {
      const calendarWeek: Calendar.Week[] = [];
      calendarWeek.length = 7;
      firstDayPosition = week === 0 ? firstDayPosition : 0;

      for (let day = firstDayPosition; day < lastDayInWeek; day++) {
        if (date.daysInMonth() >= dayCounter) {
          calendarWeek[day] = this.generateBaseNonWorkingDay(
            actualDate.clone(),
            withHoliday
          );
          dayCounter++;
          weeks[week] = [...calendarWeek];
        }
        actualDate.date(dayCounter);
      }
    }

    return weeks;
  }

  private generateBaseNonWorkingDay(
    date: moment.Moment,
    withHoliday: boolean
  ): Calendar.Day {

    // decide dayStatus based on wether it's a weekday or not
    let dayStatus: Calendar.DayStatus = [5, 6].includes(date.weekday())
      ? Calendar.DayStatus.NonWorking
      : Calendar.DayStatus.Work;

    // decide dayStatus based on freeDays and workDays from DB
    const freeDays = this.modifiedDaysService.getFreeDays();
    const workDays = this.modifiedDaysService.getWorkDays();
    freeDays.forEach(freeDay => {
      if (freeDay.date.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
        dayStatus = Calendar.DayStatus.NonWorking;
      }
    });
    workDays.forEach(workDay => {
      if (workDay.date.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
        dayStatus = Calendar.DayStatus.Work;
      }
    });

    const day: Calendar.Day = {
      date,
      status: dayStatus
    };

    return day;
  }

  private getNumberOfMonthWeeks(date: moment.Moment): number {
    const actualDate = date;
    const firstDayPosition = date.weekday();
    const numberOfDaysInMonth = actualDate.daysInMonth();

    const lastDayPosition = actualDate.date(numberOfDaysInMonth).weekday();
    return (numberOfDaysInMonth + firstDayPosition + (6 - lastDayPosition)) / 7;
  }

  private isWorkday(date: moment.Moment): boolean {
    return this.workDays.findIndex((d) => d.date.isSame(date)) >= 0;
  }

  private isFreeday(date: moment.Moment): boolean {
    return this.freeDays.findIndex((d) => d.date.isSame(date)) >= 0;
  }

  // private isOwnHoliday(date: moment.Moment): boolean {
  //   // return this.ownHolidays.findIndex((h) => h.isSame(date)) >= 0;
  //   return this.actualUser.vacations.findIndex((h) => h.isSame(date)) >= 0;
  // }

  constructor(private modifiedDaysService: ModifiedDaysService) {
    moment.locale('hu');
  }
}
