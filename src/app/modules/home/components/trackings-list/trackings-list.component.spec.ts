import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrackingsListComponent} from './trackings-list.component';

describe('OrdersListComponent', () => {
  let component: TrackingsListComponent;
  let fixture: ComponentFixture<TrackingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingsListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
