import { TestBed } from '@angular/core/testing';

import { ModifiedDaysService } from './modified-days.service';

describe('ModifiedDaysService', () => {
  let service: ModifiedDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifiedDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
