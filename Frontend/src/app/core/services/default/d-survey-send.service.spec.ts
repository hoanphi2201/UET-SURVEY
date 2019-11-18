/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DSurveySendService } from './d-survey-send.service';

describe('Service: DSurveySend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSurveySendService]
    });
  });

  it('should ...', inject([DSurveySendService], (service: DSurveySendService) => {
    expect(service).toBeTruthy();
  }));
});
