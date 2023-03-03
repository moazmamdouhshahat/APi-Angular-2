import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisDoctorComponent } from './lis-doctor.component';

describe('LisDoctorComponent', () => {
  let component: LisDoctorComponent;
  let fixture: ComponentFixture<LisDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
