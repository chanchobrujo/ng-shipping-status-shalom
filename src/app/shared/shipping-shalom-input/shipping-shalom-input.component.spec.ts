import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingShalomInputComponent } from './shipping-shalom-input.component';

describe('ShippingShalomInputComponent', () => {
  let component: ShippingShalomInputComponent;
  let fixture: ComponentFixture<ShippingShalomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingShalomInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingShalomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
