import { Component, OnInit } from '@angular/core';
import { ModifiedDaysService } from './../modified-days.service';
import * as moment from 'moment';
import { ModifiedDay, CustomeDay } from './../classes/modifiedDay';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  freeDays: Array<CustomeDay>;
  workDays: Array<CustomeDay>;

  private setCustomeDays(): void {
    this.freeDays = this.modifiedDaysService.getFreeDays();
    this.workDays = this.modifiedDaysService.getWorkDays();
  }

  public addFreeDayEventHandler(freeDay: CustomeDay): void {
    this.modifiedDaysService.addFreeDay(freeDay);
    this.setCustomeDays();
  }

  public addWorkDayEventHandler(workDay: CustomeDay): void {
    this.modifiedDaysService.addWorkDay(workDay);
    this.setCustomeDays();
  }

  public removeFreeDayEventHandler(freeDay: CustomeDay): void {
    this.modifiedDaysService.removeFreeDay(freeDay);
    this.setCustomeDays();
  }

  public removeWorkDayEventHandler(workDay: CustomeDay): void {
    this.modifiedDaysService.removeWorkDay(workDay);
    this.setCustomeDays();
  }

  constructor(public modifiedDaysService: ModifiedDaysService) { }

  ngOnInit(): void {
    this.setCustomeDays();
  }

}
