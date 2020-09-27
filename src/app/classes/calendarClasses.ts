//import * as moment from 'moment'

export enum DayStatus {
  NonWorking,
  Work,
  Leave
}

export interface Day {
  status: DayStatus
  date: moment.Moment
}

export interface Month {
  title: string;
}

export interface Year {
  year: moment.Moment;
  weekdays: string[];
  months: Month[];
}
