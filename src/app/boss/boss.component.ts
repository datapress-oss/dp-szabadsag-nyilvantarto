import { Component, OnInit } from '@angular/core';
import { AggregatedLeavesService } from './../aggregated-leaves.service';
import { Holiday, HolidayStatus, AggregatedLeave } from './../classes/aggregatedLeave';

@Component({
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent implements OnInit {
  // TODO: use a get method to get holydays (inside aggregated-leaves.service)
  mockHolidays: Array<Holiday> = [];

  bossAcceptEventHandler(holydayOutput: Holiday): void {
    console.log('boss accept event');
    console.log(holydayOutput);
  }
  bossCancelEventHandler(holydayOutput: Holiday): void {
    console.log('boss cancel event');
    console.log(holydayOutput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
