import { TestBed } from '@angular/core/testing';

import { PairGeneratorService } from './pair-generator.service';

describe('PairGeneratorService', () => {
  let service: PairGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PairGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
