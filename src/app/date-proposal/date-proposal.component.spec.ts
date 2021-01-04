import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateProposalComponent } from './date-proposal.component';

describe('DateProposalComponent', () => {
  let component: DateProposalComponent;
  let fixture: ComponentFixture<DateProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
