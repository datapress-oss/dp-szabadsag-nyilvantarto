import { Component, OnInit } from '@angular/core';
import { mockEmployees } from './../classes/summaryClasses';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-summary-calendar',
  templateUrl: './summary-calendar.component.html',
  styleUrls: ['./summary-calendar.component.scss']
})
export class SummaryCalendarComponent implements OnInit {
  monthForm: FormGroup;
  employees = mockEmployees;
  year: number;
  months: Array<string> = moment.months();
  selectedMonth: number;

  // refresh the value of 'selectedMonth' when a new month is selected
  onMonthChange(): void {
    const monthValue: string = this.monthForm.value.month;
    // get the number of the selected month by its name
    // convert to 0-11 format, to use it later with moment
    const month = (Number(moment().month(monthValue).format('M'))) - 1;
    this.selectedMonth = month;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // set the current year
    this.year = Number(moment().format('YYYY'));

    // set default value to the current month in the select form
    this.selectedMonth = Number(moment().format('M')) - 1;
    this.monthForm = this.fb.group({
      month: moment().format('MMMM')
    });
  }

}
