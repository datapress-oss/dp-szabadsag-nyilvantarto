// import moment to create mock data
import * as moment from 'moment';

export enum DayStatus {
  NonWorking,
  Work,
  Leave
}

export interface Employee {
  name: string;
  leaveDates: Array<moment.Moment>;
}

// mock data
export const mockEmployees: Array<Employee> = [
  {
    name: 'Balázs',
    leaveDates: [
      moment('2020-12-12', 'YYY-MM-DD'),
      moment('2020-11-22', 'YYY-MM-DD'),
      moment('2020-11-23', 'YYY-MM-DD'),
      moment('2020-11-24', 'YYY-MM-DD')
    ]
  },
  {
    name: 'Feri',
    leaveDates: [
      moment('2020-12-11', 'YYY-MM-DD'),
      moment('2020-11-21', 'YYY-MM-DD'),
      moment('2020-11-22', 'YYY-MM-DD'),
      moment('2020-11-23', 'YYY-MM-DD')
    ]
  }
];
