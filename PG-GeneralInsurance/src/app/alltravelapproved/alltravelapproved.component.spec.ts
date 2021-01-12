import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltravelapprovedComponent } from './alltravelapproved.component';

describe('AlltravelapprovedComponent', () => {
  let component: AlltravelapprovedComponent;
  let fixture: ComponentFixture<AlltravelapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltravelapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltravelapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
