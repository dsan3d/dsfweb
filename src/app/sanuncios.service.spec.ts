import { TestBed } from '@angular/core/testing';

import { SAnunciosService } from './sanuncios.service';

describe('SAnunciosService', () => {
  let service: SAnunciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAnunciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
