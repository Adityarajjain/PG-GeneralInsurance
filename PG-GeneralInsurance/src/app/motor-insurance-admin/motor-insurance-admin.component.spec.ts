import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorInsuranceAdminComponent } from './motor-insurance-admin.component';

describe('MotorInsuranceAdminComponent', () => {
  let component: MotorInsuranceAdminComponent;
  let fixture: ComponentFixture<MotorInsuranceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorInsuranceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorInsuranceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
