import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedPlanComponent } from './injected-plan.component';

describe('InjectedPlanComponent', () => {
  let component: InjectedPlanComponent;
  let fixture: ComponentFixture<InjectedPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectedPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
