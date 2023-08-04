import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardappsComponent } from './cardapps.component';

describe('CardappsComponent', () => {
  let component: CardappsComponent;
  let fixture: ComponentFixture<CardappsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardappsComponent]
    });
    fixture = TestBed.createComponent(CardappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
