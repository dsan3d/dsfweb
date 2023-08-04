import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardcults3dComponent } from './cardcults3d.component';

describe('Cardcults3dComponent', () => {
  let component: Cardcults3dComponent;
  let fixture: ComponentFixture<Cardcults3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardcults3dComponent]
    });
    fixture = TestBed.createComponent(Cardcults3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
