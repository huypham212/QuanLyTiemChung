import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedRegistrationComponent } from './injected-registration.component';

describe('InjectedRegistrationComponent', () => {
  let component: InjectedRegistrationComponent;
  let fixture: ComponentFixture<InjectedRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectedRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
