import { TestBed } from '@angular/core/testing';

import { DetalharServiceService } from './detalhar-service.service';

describe('DetalharServiceService', () => {
  let service: DetalharServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalharServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
