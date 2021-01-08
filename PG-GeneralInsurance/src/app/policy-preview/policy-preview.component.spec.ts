import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPreviewComponent } from './policy-preview.component';

describe('PolicyPreviewComponent', () => {
  let component: PolicyPreviewComponent;
  let fixture: ComponentFixture<PolicyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
