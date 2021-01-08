import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateInsuranceComponent } from './estimate-insurance.component';

describe('EstimateInsuranceComponent', () => {
  let component: EstimateInsuranceComponent;
  let fixture: ComponentFixture<EstimateInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
