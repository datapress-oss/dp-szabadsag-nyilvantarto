import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCalendarComponent } from './summary-calendar.component';

describe('SummaryCalendarComponent', () => {
  let component: SummaryCalendarComponent;
  let fixture: ComponentFixture<SummaryCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
