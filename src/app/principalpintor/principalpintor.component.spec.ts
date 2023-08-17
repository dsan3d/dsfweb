import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalpintorComponent } from './principalpintor.component';

describe('PrincipalpintorComponent', () => {
  let component: PrincipalpintorComponent;
  let fixture: ComponentFixture<PrincipalpintorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalpintorComponent]
    });
    fixture = TestBed.createComponent(PrincipalpintorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
