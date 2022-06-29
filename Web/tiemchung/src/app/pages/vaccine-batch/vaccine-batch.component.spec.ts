import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineBatchComponent } from './vaccine-batch.component';

describe('VaccineBatchComponent', () => {
  let component: VaccineBatchComponent;
  let fixture: ComponentFixture<VaccineBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
