import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
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
  @Input() title: string;
  @Input() theme: string;
  @Output() addNewDate = new EventEmitter<object>();
  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  bsDescription: string;
  minDate: Date;
  maxDate: Date;
  // icons
  faPlus = faPlus;
  faTrash = faTrash;

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
    const thisYear = new Date().getFullYear();
    this.bsConfig = { isAnimated: true, containerClass: this.theme };
    this.minDate = new Date(`${thisYear}-01-01`);
    this.maxDate = new Date(`${thisYear}-12-31`);
  }

}
