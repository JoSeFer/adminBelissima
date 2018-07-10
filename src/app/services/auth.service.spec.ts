import { TestBed, inject } from '@angular/core/testing';

import { SalirService } from './auth.service';

describe('SalirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalirService]
    });
  });

  it('should be created', inject([SalirService], (service: SalirService) => {
    expect(service).toBeTruthy();
  }));
});
