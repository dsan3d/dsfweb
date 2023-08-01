import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasprivacidadComponent } from './politicasprivacidad.component';

describe('PoliticasprivacidadComponent', () => {
  let component: PoliticasprivacidadComponent;
  let fixture: ComponentFixture<PoliticasprivacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticasprivacidadComponent]
    });
    fixture = TestBed.createComponent(PoliticasprivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
