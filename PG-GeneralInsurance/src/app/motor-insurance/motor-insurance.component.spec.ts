import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorInsuranceComponent } from './motor-insurance.component';

describe('MotorInsuranceComponent', () => {
  let component: MotorInsuranceComponent;
  let fixture: ComponentFixture<MotorInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
