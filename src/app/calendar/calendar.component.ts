import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() calendarYear

  constructor() {

  }

  ngOnInit(): void {

  }

}
