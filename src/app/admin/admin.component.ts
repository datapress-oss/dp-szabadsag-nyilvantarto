import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModifiedDaysService } from './../modified-days.service';
import { CustomeDay } from './../classes/modifiedDay';
import { DateManagerService } from './../date-manager.service';
import { Year } from './../classes/calendarClasses';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  modalRef: BsModalRef;
  currentYearCalendar: Year;
  freeDays: Array<CustomeDay>;
  workDays: Array<CustomeDay>;

  private setCustomeDays(): void {
    this.freeDays = this.modifiedDaysService.getFreeDays();
    this.workDays = this.modifiedDaysService.getWorkDays();
  }

  public addFreeDayEventHandler(freeDay: CustomeDay): void {
    this.modifiedDaysService.addFreeDay(freeDay);
    // refresh local array for Input() in calendar preview
    this.freeDays = [...this.modifiedDaysService.getFreeDays()];

  }

  public addWorkDayEventHandler(workDay: CustomeDay): void {
    this.modifiedDaysService.addWorkDay(workDay);
    // refresh local array for Input() in calendar preview
    this.workDays = [...this.modifiedDaysService.getWorkDays()];
  }

  public removeFreeDayEventHandler(freeDay: CustomeDay): void {
    this.modifiedDaysService.removeFreeDay(freeDay);
    this.setCustomeDays();
  }

  public removeWorkDayEventHandler(workDay: CustomeDay): void {
    this.modifiedDaysService.removeWorkDay(workDay);
    this.setCustomeDays();
  }

  public adminStateSaveEventHandler(): void {
    console.log('admin state saved to db');
  }

  public adminStateDiscardEventHandler(): void {
    console.log('admin state loaded from db');
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  constructor(
    public modifiedDaysService: ModifiedDaysService,
    private dateManager: DateManagerService,
    private modalService: BsModalService
    ) {
    this.currentYearCalendar = this.dateManager.createCalendar(moment().year());
  }

  ngOnInit(): void {
    this.setCustomeDays();
  }

}
