import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { CustomeDay } from './../classes/calendarClasses';
import * as moment from 'moment';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { huLocale } from 'ngx-bootstrap/locale';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
defineLocale('hu', huLocale);

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerInputComponent implements OnInit {
  private dateFormat = 'YYYY-MM-DD';
  @Input() title: string;
  @Input() theme: string;
  // array storing the custome days
  @Input() customeDays: Array<CustomeDay> = [];
  // calendar properties
  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  bsDescription = '';
  minDate: Date;
  maxDate: Date;
  // icons
  faPlus = faPlus;
  faTrash = faTrash;

  displayMomentDate(date: moment.Moment): string {
    return date.format('YYYY.MM.DD');
  }

  private addNewDate(day: Date): void {
    // construct new CustomeDay obj
    const newDate: CustomeDay = {
      date: moment(day, this.dateFormat),
      description: this.bsDescription
    };
    // add newDate to days arr
    this.customeDays.push(newDate);
    // clear form values to default
    this.bsValue = new Date();
    this.bsDescription = '';
  }

  onNewDate(day: Date): void {
    console.log(this.bsDescription);
    // validate description (must not be empty)
    if (!(this.bsDescription === '' || this.bsDescription === null)) {
      this.addNewDate(day);
    }
  }

  onRemoveDate(day: moment.Moment): void {
    // remove the selected day
    this.customeDays = this.customeDays.filter(customeDay => {
      return customeDay.date.format(this.dateFormat) !== day.format(this.dateFormat);
    });
  }

  constructor(private localeService: BsLocaleService) {
    this.localeService.use('hu');
  }

  ngOnInit(): void {
    const thisYear = new Date().getFullYear();
    this.bsConfig = { isAnimated: true, containerClass: this.theme };
    this.minDate = new Date(`${thisYear}-01-01`);
    this.maxDate = new Date(`${thisYear}-12-31`);
  }

}
