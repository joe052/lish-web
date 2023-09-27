import { ComponentFixture, TestBed } from '@angular/core/testing';

import { August2023Component } from './august2023.component';

describe('August2023Component', () => {
  let component: August2023Component;
  let fixture: ComponentFixture<August2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [August2023Component],
    }).compileComponents();

    fixture = TestBed.createComponent(August2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
