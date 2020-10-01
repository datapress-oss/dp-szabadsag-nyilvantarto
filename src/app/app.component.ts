import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import {fadeAnimation} from './animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  constructor() {}
}
