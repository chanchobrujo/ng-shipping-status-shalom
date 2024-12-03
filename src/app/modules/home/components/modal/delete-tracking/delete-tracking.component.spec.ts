import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrackingComponent } from './delete-tracking.component';

describe('DeleteTrackingComponent', () => {
  let component: DeleteTrackingComponent;
  let fixture: ComponentFixture<DeleteTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
