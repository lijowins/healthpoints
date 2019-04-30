import { TestBed } from '@angular/core/testing';

import { HgOasService } from './hg-oas.service';

describe('HgOasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HgOasService = TestBed.get(HgOasService);
    expect(service).toBeTruthy();
  });
});
