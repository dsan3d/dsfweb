import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpinturaComponent } from './cardpintura.component';

describe('CardpinturaComponent', () => {
  let component: CardpinturaComponent;
  let fixture: ComponentFixture<CardpinturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardpinturaComponent]
    });
    fixture = TestBed.createComponent(CardpinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
