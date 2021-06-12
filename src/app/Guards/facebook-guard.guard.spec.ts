import { TestBed } from '@angular/core/testing';

import { FacebookGuardGuard } from './facebook-guard.guard';

describe('FacebookGuardGuard', () => {
  let guard: FacebookGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FacebookGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
