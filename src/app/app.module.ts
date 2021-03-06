import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonthViewComponent } from './calendar/month-view/month-view.component';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';
import { SummaryCalendarComponent } from './summary-calendar/summary-calendar.component';
import { MonthSummaryComponent } from './summary-calendar/month-summary/month-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import { UserMenuComponent } from './navbar/user-menu/user-menu.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ThemeSwitcherComponent } from './navbar/theme-switcher/theme-switcher.component';
import { DateProposalComponent } from './date-proposal/date-proposal.component';
import { BossComponent } from './boss/boss.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { StateSaveComponent } from './state-save/state-save.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthViewComponent,
    DatepickerInputComponent,
    SummaryCalendarComponent,
    MonthSummaryComponent,
    NavbarComponent,
    UserMenuComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    ThemeSwitcherComponent,
    DateProposalComponent,
    BossComponent,
    SummaryViewComponent,
    StateSaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FontAwesomeModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DatepickerInputComponent]
})
export class AppModule { }
