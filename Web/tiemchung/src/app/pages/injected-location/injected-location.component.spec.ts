import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedLocationComponent } from './injected-location.component';

describe('InjectedLocationComponent', () => {
  let component: InjectedLocationComponent;
  let fixture: ComponentFixture<InjectedLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectedLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
