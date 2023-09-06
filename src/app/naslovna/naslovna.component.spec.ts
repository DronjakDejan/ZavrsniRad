import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaslovnaComponent } from './naslovna.component';

describe('NaslovnaComponent', () => {
  let component: NaslovnaComponent;
  let fixture: ComponentFixture<NaslovnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaslovnaComponent]
    });
    fixture = TestBed.createComponent(NaslovnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
