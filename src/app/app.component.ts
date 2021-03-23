import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeAnimation} from './animations';
import { DateManagerService } from './date-manager.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  constructor(private dateManager: DateManagerService) {
    // init 'currentYearCalendar' on first load
    this.dateManager.setYearCalendar();
    // setup moment local settings
    // refer to: https://momentjs.com/docs/#/customization/weekday-abbreviations/
    moment.locale('hu');
  }
}
