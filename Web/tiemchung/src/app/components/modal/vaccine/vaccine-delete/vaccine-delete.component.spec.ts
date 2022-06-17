import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineDeleteComponent } from './vaccine-delete.component';

describe('VaccineDeleteComponent', () => {
  let component: VaccineDeleteComponent;
  let fixture: ComponentFixture<VaccineDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
