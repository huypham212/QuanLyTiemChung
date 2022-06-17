import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedHistoriesComponent } from './injected-histories.component';

describe('InjectedHistoriesComponent', () => {
  let component: InjectedHistoriesComponent;
  let fixture: ComponentFixture<InjectedHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectedHistoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
