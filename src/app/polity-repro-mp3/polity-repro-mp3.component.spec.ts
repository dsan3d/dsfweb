import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolityReproMp3Component } from './polity-repro-mp3.component';

describe('PolityReproMp3Component', () => {
  let component: PolityReproMp3Component;
  let fixture: ComponentFixture<PolityReproMp3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolityReproMp3Component]
    });
    fixture = TestBed.createComponent(PolityReproMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
