import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelinsuranceAdminComponent } from './travelinsurance-admin.component';

describe('TravelinsuranceAdminComponent', () => {
  let component: TravelinsuranceAdminComponent;
  let fixture: ComponentFixture<TravelinsuranceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelinsuranceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelinsuranceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
