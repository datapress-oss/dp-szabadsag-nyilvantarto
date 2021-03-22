import { Injectable } from '@angular/core';
import { AggregatedLeave, HolidayStatus } from './classes/aggregatedLeave';
import { AuthService } from './auth.service';
import * as Moment from 'moment';
import { DateRange, extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

@Injectable({
  providedIn: 'root'
})
export class AggregatedLeavesService {
  private dateFormat = 'YYYY-MM-DD';
  aggregatedLeaves: Array<AggregatedLeave> = [];

  public getUserLeaveDates(): Array<DateRange> {
    const leaveDatesRanges: Array<DateRange> = [];
    this.aggregatedLeaves.forEach(aggregatedLeave => {
      if (aggregatedLeave.name === this.authService.loggedInUser.username) {
        aggregatedLeave.holidays.forEach(holiday => {
          if (holiday.status === HolidayStatus.accepted || holiday.status === HolidayStatus.pending) {
            const from = moment(holiday.from, this.dateFormat);
            const to = moment(holiday.to, this.dateFormat);
            leaveDatesRanges.push(moment().range(from, to));
          }
        });
      }
    });
    return leaveDatesRanges;
  }

  constructor(private authService: AuthService) {
    this.aggregatedLeaves = [
      {
        name: 'Balazs',
        holidays: [
          {
            status: HolidayStatus.accepted,
            groupId: 1,
            from: '2021-02-07',
            to: '2021-02-10',
            days: 30
          },
          {
            status: HolidayStatus.pending,
            groupId: 2,
            from: '2021-04-01',
            to: '2021-04-07',
            days: 30
          }
        ]
      },
      {
        name: 'Feri',
        holidays: [
          {
            status: HolidayStatus.accepted,
            groupId: 1,
            from: '2021-06-01',
            to: '2021-07-01',
            days: 30
          },
          {
            status: HolidayStatus.accepted,
            groupId: 2,
            from: '2021-03-01',
            to: '2021-03-05',
            days: 5
          }
        ]
      }
    ];
  }
}
