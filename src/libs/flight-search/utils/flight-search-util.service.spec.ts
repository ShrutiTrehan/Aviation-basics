import { TestBed } from '@angular/core/testing';

import { FlightSearchUtilService } from './flight-search-util.service';

describe('FlightSearchUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightSearchUtilService = TestBed.get(FlightSearchUtilService);
    expect(service).toBeTruthy();
  });
});
