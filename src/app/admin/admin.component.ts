import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModifiedDaysService } from './../modified-days.service';
import { CustomDay } from './../classes/modifiedDay';
import { DateManagerService } from './../date-manager.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  modalRef: BsModalRef;

  public addFreeDayEventHandler(freeDay: CustomDay): void {
    this.modifiedDaysService.addFreeDay(freeDay);
  }

  public addWorkDayEventHandler(workDay: CustomDay): void {
    this.modifiedDaysService.addWorkDay(workDay);
  }

  public removeFreeDayEventHandler(freeDay: CustomDay): void {
    this.modifiedDaysService.removeFreeDay(freeDay);
  }

  public removeWorkDayEventHandler(workDay: CustomDay): void {
    this.modifiedDaysService.removeWorkDay(workDay);
  }

  public adminStateSaveEventHandler(): void {
    // refresh local arrays
    console.log('admin state saved to db');
  }

  public adminStateDiscardEventHandler(): void {
    // this.dateManager.currentYearCalendarAdmin.months = null;
    this.modifiedDaysService.revertCustomDays();
    this.dateManager.setYearCalendarAdmin();
    console.log('admin state loaded from db');
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  constructor(
    public modifiedDaysService: ModifiedDaysService,
    public dateManager: DateManagerService,
    private modalService: BsModalService
    ) {
  }

  ngOnInit(): void {
    this.dateManager.setYearCalendarAdmin();
  }

}
