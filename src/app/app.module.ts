import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponenetComponent } from './test-componenet/test-componenet.component';
import { YearViewComponent } from './calendar/year-view/year-view.component';
import { MonthViewComponent } from './calendar/month-view/month-view.component';
import { MonthViewRangeComponent } from './calendar/month-view-range/month-view-range.component';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TestComponenetComponent,
    YearViewComponent,
    MonthViewComponent,
    MonthViewRangeComponent,
    DatepickerInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DatepickerInputComponent]
})
export class AppModule { }
