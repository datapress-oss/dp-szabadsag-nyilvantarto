import { Component, OnInit } from '@angular/core';
import { mockHolidays, Holiday } from './../classes/holiday';

@Component({
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent implements OnInit {
  mockHolidays = mockHolidays;

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
