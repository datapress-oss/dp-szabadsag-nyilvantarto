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
