import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmotorapprovedComponent } from './allmotorapproved.component';

describe('AllmotorapprovedComponent', () => {
  let component: AllmotorapprovedComponent;
  let fixture: ComponentFixture<AllmotorapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmotorapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmotorapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
