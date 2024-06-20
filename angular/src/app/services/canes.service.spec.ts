import { TestBed } from '@angular/core/testing';

import { CanesService } from './canes.service';

describe('CanesService', () => {
  let service: CanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
