import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrackingComponent } from './detail-tracking.component';

describe('DetailTrackingComponent', () => {
  let component: DetailTrackingComponent;
  let fixture: ComponentFixture<DetailTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
