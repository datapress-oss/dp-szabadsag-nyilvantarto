import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AggregatedLeavesService } from './../aggregated-leaves.service';
import { Holiday, HolidayStatus, AggregatedLeave } from './../classes/aggregatedLeave';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-proposal',
  templateUrl: './date-proposal.component.html',
  styleUrls: ['./date-proposal.component.scss']
})
export class DateProposalComponent implements OnInit {
  HolidayStatus = HolidayStatus;

  faCheck = faCheck;
  faTimes = faTimes;
  moment = moment;
  dateFormat = 'y-MM-dd';
  @Input() holiday: Holiday;
  @Output() accept: EventEmitter<Holiday> = new EventEmitter<Holiday>();
  @Output() cancel: EventEmitter<Holiday> = new EventEmitter<Holiday>();

  public onAccept(): void {
    this.accept.emit(this.holiday);
  }

  public onCancel(): void {
    this.cancel.emit(this.holiday);
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

}
