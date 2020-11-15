import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { huLocale } from 'ngx-bootstrap/locale';
defineLocale('hu', huLocale);

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerInputComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  @Output() addNewDate = new EventEmitter<object>();
  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  bsDescription: string;
  minDate: Date;
  maxDate: Date;
 

  // emits the selected day with a description
  onNewDate(day: Date): void {
    // construct new obj
    const newDate = {
      date: day,
      description: this.bsDescription
    };
    // send newDate to a parent component
    this.addNewDate.emit(newDate);

    // clear form values to default
    this.bsValue = new Date();
    this.bsDescription = '';
  }

  constructor(private localeService: BsLocaleService) {
    this.localeService.use('hu');

  }

  ngOnInit(): void {
    this.bsConfig = { isAnimated: true, containerClass: this.theme };
    this.minDate = new Date('2020-01-01');
    this.maxDate =new Date('2020-12-31');
  }

}
