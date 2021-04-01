import * as moment from 'moment';
export interface CustomDay {
    title: string;
    date: moment.Moment;
}
export interface ModifiedDay{
    year: number;
    freeDays: Array<CustomDay>;
    workDays: Array<CustomDay>;
    timestamp: string;
}


export const modifiedDay: ModifiedDay = {
  year: 2021,
  freeDays: [
    {
      title: 'Újév',
      date: moment('2021-01-01', 'YYYY-MM-DD')
    },
    {
      title: ' Március 15',
      date: moment('2021-03-15', 'YYYY-MM-DD')
    },
    {
      title: ' Augusztus 20',
      date: moment('2021-08-20', 'YYYY-MM-DD')
    },
    {
      title: ' December 21',
      date: moment('2021-12-24', 'YYYY-MM-DD')
    }
  ],
  workDays: [
    {
      title: 'Augusztus 21 ledolgozandó',
      date: moment('2021-08-29', 'YYYY-MM-DD')
    },
    {
      title: ' December 24 ledolgozandó',
      date: moment('2021-12-12', 'YYYY-MM-DD')
    }
  ],
  timestamp: '1611658840'
};

