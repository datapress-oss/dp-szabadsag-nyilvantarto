import { Component, OnInit } from '@angular/core';
import { ModifiedDaysService } from './../modified-days.service';
import * as moment from 'moment';
import { customeDay, modifiedDay} from "./../classes/modifiedDay";
import { title } from 'process';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // mock data for datepickers
  modifiedDay: modifiedDay = {
    year: 2020,
    freeDays: [{
      title: 'Újév',
      date: moment('2020-01-01', 'YYYY-MM-DD')
    
    },
    {
      title: ' Március 15',
      date: moment('2020-03-15', 'YYYY-MM-DD')
    },{
      title: ' Augusztus 20',
      date: moment('2020-08-20', 'YYYY-MM-DD')
    },{
      title: ' Augusztus 21',
      date: moment('2020-08-21', 'YYYY-MM-DD')
    },{
      title: ' December 21',
      date: moment('2020-12-24', 'YYYY-MM-DD')
    }
  ],
  workDays: [{
    title: 'Augusztus 21',
    date: moment('2020-08-29', 'YYYY-MM-DD')
  
  },
  {
    title: ' December 24',
    date: moment('2020-12-12', 'YYYY-MM-DD')
  }
]  
  }
  

  

  constructor(public modifiedDaysService: ModifiedDaysService) { }

  ngOnInit(): void {
  }

}
