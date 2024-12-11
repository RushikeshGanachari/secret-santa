import { TestBed } from '@angular/core/testing';

import { PairStorageService } from './pair-storage.service';

describe('PairStorageService', () => {
  let service: PairStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PairStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
