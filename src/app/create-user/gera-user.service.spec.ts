import { TestBed } from '@angular/core/testing';

import { GeraUserService } from './gera-user.service';

describe('GeraUserService', () => {
  let service: GeraUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeraUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
