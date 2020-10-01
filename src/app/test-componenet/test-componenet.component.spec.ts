import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponenetComponent } from './test-componenet.component';

describe('TestComponenetComponent', () => {
  let component: TestComponenetComponent;
  let fixture: ComponentFixture<TestComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
