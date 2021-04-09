import { Injectable } from '@angular/core';
import { ModifiedDay, CustomDay, modifiedDay } from './classes/modifiedDay';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ModifiedDaysService {
  // mock data for datepickers
  // use 'cloneMockData()' to create a clone of the original object and not a reference, so the original will not be mutated
  modifiedDay = this.cloneMockData();

  // this method is needed because when cloning an object, only primitive data types are cloned, but we need moment.Moment for dates
  cloneMockData(): ModifiedDay {
    const modifiedDayRaw: ModifiedDay = JSON.parse(JSON.stringify(modifiedDay));
    const modifiedDayWithMoment: ModifiedDay = {
      year: modifiedDayRaw.year,
      freeDays: [],
      workDays: [],
      timestamp: modifiedDayRaw.timestamp
    };
    // convert dates to moment dates (beacause of JSON parse)
    modifiedDayRaw.freeDays.forEach(freeDay => {
      modifiedDayWithMoment.freeDays.push({ title: freeDay.title, date: moment(freeDay.date) });
    });
    modifiedDayRaw.workDays.forEach(workDay => {
      modifiedDayWithMoment.workDays.push({ title: workDay.title, date: moment(workDay.date) });
    });
    return modifiedDayWithMoment;
  }

  getFreeDays(): Array<CustomDay> {
    return this.modifiedDay.freeDays;
  }

  getWorkDays(): Array<CustomDay> {
    return this.modifiedDay.workDays;
  }

  addFreeDay(freeDay: CustomDay): void {
    this.modifiedDay.freeDays.push(freeDay);
  }

  addWorkDay(workDay: CustomDay): void {
    this.modifiedDay.workDays.push(workDay);
  }

  removeFreeDay(freeDay: CustomDay): void {
    const filteredArr = this.modifiedDay.freeDays.filter((customDay) => {
      return customDay !== freeDay;
    });
    this.modifiedDay.freeDays = filteredArr;
  }

  removeWorkDay(workDay: CustomDay): void {
    const filteredArr = this.modifiedDay.workDays.filter((customDay) => {
      return customDay !== workDay;
    });
    this.modifiedDay.workDays = filteredArr;
  }

  revertCustomDays(): void {
    this.modifiedDay = this.cloneMockData();
  }

  constructor() {
  }
}
