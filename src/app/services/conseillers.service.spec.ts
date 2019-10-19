import { TestBed } from '@angular/core/testing';

import { ConseillersService } from './conseillers.service';

describe('ConseillersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConseillersService = TestBed.get(ConseillersService);
    expect(service).toBeTruthy();
  });
});
