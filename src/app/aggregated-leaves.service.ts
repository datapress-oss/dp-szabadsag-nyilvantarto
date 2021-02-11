import { Injectable } from '@angular/core';
import { AggregatedLeave } from './classes/aggregatedLeave';

@Injectable({
  providedIn: 'root'
})
export class AggregatedLeavesService {
  aggregatedLeaves: Array<AggregatedLeave> = [
    {
      name: 'Nyirfa Balázs',
      holiday: [
        {
          status: 'X',
          groupId: 1,
          from: '2021-02-01',
          to: '2022-03-01',
          days: 30
        },
        {
          status: 'Y',
          groupId: 2,
          from: '2021-04-01',
          to: '2022-05-01',
          days: 30
        }
      ]
    },
    {
      name: 'Test Person',
      holiday: [
        {
          status: 'X',
          groupId: 1,
          from: '2021-06-01',
          to: '2022-07-01',
          days: 30
        },
        {
          status: 'Y',
          groupId: 2,
          from: '2021-03-01',
          to: '2022-03-05',
          days: 5
        }
      ]
    }
  ];

  constructor() {
  }
}
