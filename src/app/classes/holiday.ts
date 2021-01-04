import * as moment from 'moment';

export enum HolidayStatus {
  selected,
  pending,
  accepted
}

export interface Holiday {
  from: moment.Moment;
  to: moment.Moment;
  status: HolidayStatus;
}

export const mockHolidays: Array<Holiday> = [
  {
    from: moment('2021-01-09', 'YYYY-MM-DD'),
    to: moment('2021-01-19', 'YYYY-MM-DD'),
    status: HolidayStatus.pending
  },
  {
    from: moment('2021-02-09', 'YYYY-MM-DD'),
    to: moment('2021-02-19', 'YYYY-MM-DD'),
    status: HolidayStatus.accepted
  },
  {
    from: moment('2021-03-09', 'YYYY-MM-DD'),
    to: moment('2021-03-19', 'YYYY-MM-DD'),
    status: HolidayStatus.selected
  }
];
