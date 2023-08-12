import { TestBed } from '@angular/core/testing';

import { CardGaleriaService } from './card-galeria.service';

describe('CardGaleriaService', () => {
  let service: CardGaleriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardGaleriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
