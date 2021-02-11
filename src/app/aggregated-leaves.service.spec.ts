import { TestBed } from '@angular/core/testing';

import { AggregatedLeavesService } from './aggregated-leaves.service';

describe('AggregatedLeavesService', () => {
  let service: AggregatedLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggregatedLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
