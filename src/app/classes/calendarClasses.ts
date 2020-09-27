export enum DayStatus {
  NonWorking,
  Work,
  Leave
}

export interface MarkedDay {
  title: string;
  date: moment.Moment;
}

export interface Day {
  status: DayStatus
  date: moment.Moment
}

export interface Week {
}

export interface Month {
  title: string;
  weeks: Week[];
}

export interface Year {
  year: moment.Moment;
  weekdays: string[];
  months: Month[];
}
