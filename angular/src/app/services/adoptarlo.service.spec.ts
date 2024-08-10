import { TestBed } from '@angular/core/testing';

import { AdoptarloService } from './adoptarlo.service';

describe('AdoptarloService', () => {
  let service: AdoptarloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptarloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
