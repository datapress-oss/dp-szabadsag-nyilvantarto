import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

import { HostBinding } from '@angular/core';
import {slideInAnimation} from './animations';
/* import { animation } from '@angular/animations'; */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
   
   /*  slideInAnimation */
   
})
export class AppComponent {
 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
 

  constructor() {
    
  }
}
