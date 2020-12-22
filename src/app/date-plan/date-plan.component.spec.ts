import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePlanComponent } from './date-plan.component';

describe('DatePlanComponent', () => {
  let component: DatePlanComponent;
  let fixture: ComponentFixture<DatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
