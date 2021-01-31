import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSaveComponent } from './state-save.component';

describe('StateSaveComponent', () => {
  let component: StateSaveComponent;
  let fixture: ComponentFixture<StateSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
