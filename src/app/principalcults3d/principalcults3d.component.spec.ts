import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Principalcults3dComponent } from './principalcults3d.component';

describe('Principalcults3dComponent', () => {
  let component: Principalcults3dComponent;
  let fixture: ComponentFixture<Principalcults3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Principalcults3dComponent]
    });
    fixture = TestBed.createComponent(Principalcults3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
