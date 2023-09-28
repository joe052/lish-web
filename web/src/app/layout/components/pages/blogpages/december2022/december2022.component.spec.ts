import { ComponentFixture, TestBed } from '@angular/core/testing';

import { December2022Component } from './december2022.component';

describe('December2022Component', () => {
  let component: December2022Component;
  let fixture: ComponentFixture<December2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [December2022Component],
    }).compileComponents();

    fixture = TestBed.createComponent(December2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
