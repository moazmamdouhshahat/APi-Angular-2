import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavberComponent } from './navber.component';

describe('NavberComponent', () => {
  let component: NavberComponent;
  let fixture: ComponentFixture<NavberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
