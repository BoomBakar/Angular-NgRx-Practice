import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiComponent } from './desi.component';

describe('DesiComponent', () => {
  let component: DesiComponent;
  let fixture: ComponentFixture<DesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesiComponent]
    });
    fixture = TestBed.createComponent(DesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
