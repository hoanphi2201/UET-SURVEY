/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SurveySendService } from './survey-send.service';

describe('Service: SurveySend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveySendService]
    });
  });

  it('should ...', inject([SurveySendService], (service: SurveySendService) => {
    expect(service).toBeTruthy();
  }));
});
