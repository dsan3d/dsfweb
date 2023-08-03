import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolityConversorCryptoComponent } from './polity-conversor-crypto.component';

describe('PolityConversorCryptoComponent', () => {
  let component: PolityConversorCryptoComponent;
  let fixture: ComponentFixture<PolityConversorCryptoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolityConversorCryptoComponent]
    });
    fixture = TestBed.createComponent(PolityConversorCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
