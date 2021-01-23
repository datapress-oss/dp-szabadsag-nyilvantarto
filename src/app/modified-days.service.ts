import { Injectable } from '@angular/core';
import { ModifiedDay, CustomeDay } from './classes/modifiedDay';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ModifiedDaysService {
  // mock data for datepickers
  modifiedDay: ModifiedDay = {
    year: 2020,
    freeDays: [
      {
        title: 'Újév',
        date: moment('2020-01-01', 'YYYY-MM-DD')
      },
      {
        title: ' Március 15',
        date: moment('2020-03-15', 'YYYY-MM-DD')
      },
      {
        title: ' Augusztus 20',
        date: moment('2020-08-20', 'YYYY-MM-DD')
      },
      {
        title: ' Augusztus 21',
        date: moment('2020-08-21', 'YYYY-MM-DD')
      },
      {
        title: ' December 21',
        date: moment('2020-12-24', 'YYYY-MM-DD')
      }
    ],
    workDays: [
      {
        title: 'Augusztus 21',
        date: moment('2020-08-29', 'YYYY-MM-DD')
      },
      {
        title: ' December 24',
        date: moment('2020-12-12', 'YYYY-MM-DD')
      }
    ]
  };

  getFreeDays(): Array<CustomeDay> {
    return this.modifiedDay.freeDays;
  }

  getWorkDays(): Array<CustomeDay> {
    return this.modifiedDay.workDays;
  }

  addFreeDay(freeDay: CustomeDay): void {
    this.modifiedDay.freeDays.push(freeDay);
  }

  addWorkDay(workDay: CustomeDay): void {
    this.modifiedDay.workDays.push(workDay);
  }

  removeFreeDay(freeDay: CustomeDay): void {
    const filteredArr = this.modifiedDay.freeDays.filter((customeDay) => {
      return customeDay !== freeDay;
    });
    this.modifiedDay.freeDays = filteredArr;
  }

  removeWorkDay(workDay: CustomeDay): void {
    const filteredArr = this.modifiedDay.workDays.filter((customeDay) => {
      return customeDay !== workDay;
    });
    this.modifiedDay.workDays = filteredArr;
  }

  constructor() { }
}
