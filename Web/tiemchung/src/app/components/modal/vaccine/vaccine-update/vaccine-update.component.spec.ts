import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineUpdateComponent } from './vaccine-update.component';

describe('VaccineUpdateComponent', () => {
  let component: VaccineUpdateComponent;
  let fixture: ComponentFixture<VaccineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
