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
  @Output() addNewDate = new EventEmitter<Date>();
  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();

  // emits the selected day
  onNewDate(day: Date): void {
    this.addNewDate.emit(day);
    console.log(`Ezt a napot választottad ki: ${day}`);
  }

  constructor(private localeService: BsLocaleService) {
    this.localeService.use('hu');
  }

  ngOnInit(): void {
    this.bsConfig = { isAnimated: true, containerClass: this.theme };
  }

}
