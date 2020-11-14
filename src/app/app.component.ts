import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fadeAnimation} from './animations';
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

  constructor() {
    // setup moment local settings
    // refer to: https://momentjs.com/docs/#/customization/weekday-abbreviations/
    moment.locale('hu');
  }
}
