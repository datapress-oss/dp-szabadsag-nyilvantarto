import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { CustomDay } from './../classes/modifiedDay';
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
  @Input() theme: string;
  // array storing the custom days
  @Input() customDays: Array<CustomDay> = [];
  // output events
  @Output() addCustomDayEvent: EventEmitter<CustomDay> = new EventEmitter<CustomDay>();
  @Output() removeCustomDayEvent: EventEmitter<CustomDay> = new EventEmitter<CustomDay>();
  // calendar properties
  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  title = '';
  minDate: Date;
  maxDate: Date;
  // icons
  faPlus = faPlus;
  faTrash = faTrash;

  displayMomentDate(date: moment.Moment): string {
    return date.format('YYYY.MM.DD');
  }

  onNewDate(day: Date): void {
    // validate description (must not be empty)
    if (!(this.title === '' || this.title === null)) {
      // construct new CustomeDay obj
      const customDay: CustomDay = {
        date: moment(day, this.dateFormat),
        title: this.title
      };
      // emit 'customDay'
      this.addCustomDayEvent.emit(customDay);
      // clear form values to default
      this.bsValue = new Date();
      this.title = '';
    }
  }

  onRemoveDate(customDay: CustomDay): void {
    // emit the customeDay to be removed
    this.removeCustomDayEvent.emit(customDay);
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
