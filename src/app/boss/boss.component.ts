import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent implements OnInit {
  mockHolidays = [];

  bossAcceptEventHandler(holydayOutput: any): void {
    console.log('boss accept event');
    console.log(holydayOutput);
  }
  bossCancelEventHandler(holydayOutput: any): void {
    console.log('boss cancel event');
    console.log(holydayOutput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
