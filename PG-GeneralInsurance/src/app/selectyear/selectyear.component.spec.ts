import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectyearComponent } from './selectyear.component';

describe('SelectyearComponent', () => {
  let component: SelectyearComponent;
  let fixture: ComponentFixture<SelectyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
