import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthViewRangeComponent } from './month-view-range.component';

describe('MonthViewRangeComponent', () => {
  let component: MonthViewRangeComponent;
  let fixture: ComponentFixture<MonthViewRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthViewRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthViewRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
