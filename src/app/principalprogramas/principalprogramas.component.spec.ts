import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalprogramasComponent } from './principalprogramas.component';

describe('PrincipalprogramasComponent', () => {
  let component: PrincipalprogramasComponent;
  let fixture: ComponentFixture<PrincipalprogramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalprogramasComponent]
    });
    fixture = TestBed.createComponent(PrincipalprogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
