import { Component, OnInit } from '@angular/core';
import { mockHolidays, Holiday } from './../classes/holiday';

@Component({
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent implements OnInit {
  mockHolidays = mockHolidays;

  bossAcceptEventHandler(): void {
    console.log('boss accept event');
  }
  bossCancelEventHandler(): void {
    console.log('boss cancel event');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
