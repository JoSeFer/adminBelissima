import { TestBed, inject } from '@angular/core/testing';

import { SalirService } from './salir.service';

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
