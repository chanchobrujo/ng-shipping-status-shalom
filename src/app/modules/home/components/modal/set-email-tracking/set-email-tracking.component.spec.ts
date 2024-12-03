import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmailTrackingComponent } from './set-email-tracking.component';

describe('SetEmailTrackingComponent', () => {
  let component: SetEmailTrackingComponent;
  let fixture: ComponentFixture<SetEmailTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEmailTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetEmailTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
