import { TestBed } from '@angular/core/testing';

import { BossGuardGuard } from './boss-guard.guard';

describe('BossGuardGuard', () => {
  let guard: BossGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BossGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
