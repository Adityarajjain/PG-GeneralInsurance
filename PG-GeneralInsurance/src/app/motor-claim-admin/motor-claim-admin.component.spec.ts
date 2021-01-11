import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorClaimAdminComponent } from './motor-claim-admin.component';

describe('MotorClaimAdminComponent', () => {
  let component: MotorClaimAdminComponent;
  let fixture: ComponentFixture<MotorClaimAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorClaimAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorClaimAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
