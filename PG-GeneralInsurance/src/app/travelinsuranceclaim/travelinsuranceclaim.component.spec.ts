import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelinsuranceclaimComponent } from './travelinsuranceclaim.component';

describe('TravelinsuranceclaimComponent', () => {
  let component: TravelinsuranceclaimComponent;
  let fixture: ComponentFixture<TravelinsuranceclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelinsuranceclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelinsuranceclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
