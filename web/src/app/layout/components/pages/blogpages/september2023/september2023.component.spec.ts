import { ComponentFixture, TestBed } from '@angular/core/testing';

import { September2023Component } from './september2023.component';

describe('September2023Component', () => {
  let component: September2023Component;
  let fixture: ComponentFixture<September2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ September2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(September2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
