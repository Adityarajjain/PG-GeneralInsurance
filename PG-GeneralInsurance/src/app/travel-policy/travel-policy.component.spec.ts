import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPolicyComponent } from './travel-policy.component';

describe('TravelPolicyComponent', () => {
  let component: TravelPolicyComponent;
  let fixture: ComponentFixture<TravelPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
