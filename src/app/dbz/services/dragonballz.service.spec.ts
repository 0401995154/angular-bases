import { TestBed } from '@angular/core/testing';

import { DragonballzService } from './dragonballz.service';

describe('DragonballzService', () => {
  let service: DragonballzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonballzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
