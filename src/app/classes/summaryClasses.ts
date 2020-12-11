// import moment to create mock data
import * as moment from 'moment';

export interface Employee {
  name: string;
  leaveDates: Array<moment.Moment>;
}

// mock data
export const mockEmployees: Array<Employee> = [
  {
    name: 'Balazs',
    leaveDates: [
      moment('2020-12-12', 'YYYY-MM-DD'),
      moment('2020-11-22', 'YYYY-MM-DD'),
      moment('2020-11-23', 'YYYY-MM-DD'),
      moment('2020-11-24', 'YYYY-MM-DD'),
      moment('2020-12-19', 'YYYY-MM-DD')
    ]
  },
  {
    name: 'Feri',
    leaveDates: [
      moment('2020-12-11', 'YYYY-MM-DD'),
      moment('2020-11-21', 'YYYY-MM-DD'),
      moment('2020-11-22', 'YYYY-MM-DD'),
      moment('2020-11-23', 'YYYY-MM-DD')
    ]
  },
  {
    name: 'Kis Ferenc Béla Balázs',
    leaveDates: [
      moment('2020-12-02', 'YYYY-MM-DD'),
      moment('2020-11-27', 'YYYY-MM-DD'),
      moment('2020-11-25', 'YYYY-MM-DD'),
      moment('2020-11-30', 'YYYY-MM-DD')
    ]
  }
];

export const nonWorkDays = [
  moment('2020-12-24', 'YYYY-MM-DD'),
  moment('2020-12-25', 'YYYY-MM-DD'),
  moment('2020-12-26', 'YYYY-MM-DD'),
  moment('2020-12-27', 'YYYY-MM-DD'),
  moment('2020-12-28', 'YYYY-MM-DD'),
  moment('2020-12-29', 'YYYY-MM-DD')
];

export const extraWorkDays = [
  moment('2020-12-12', 'YYYY-MM-DD'),
  moment('2020-12-19', 'YYYY-MM-DD')
];
