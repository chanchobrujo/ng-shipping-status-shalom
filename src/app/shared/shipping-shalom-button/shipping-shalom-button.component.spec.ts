import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingShalomButtonComponent } from './shipping-shalom-button.component';

describe('ShippingShalomButtonComponent', () => {
  let component: ShippingShalomButtonComponent;
  let fixture: ComponentFixture<ShippingShalomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingShalomButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingShalomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
