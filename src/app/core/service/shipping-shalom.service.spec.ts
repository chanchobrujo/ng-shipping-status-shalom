import { TestBed } from '@angular/core/testing';

import { ShippingShalomService } from './shipping-shalom.service';

describe('ShippingShalomService', () => {
  let service: ShippingShalomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingShalomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
