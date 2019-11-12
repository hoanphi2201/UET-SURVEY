/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DSurveyResponseService } from './d-survey-response.service';

describe('Service: DSurveyResponse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSurveyResponseService]
    });
  });

  it('should ...', inject(
    [DSurveyResponseService],
    (service: DSurveyResponseService) => {
      expect(service).toBeTruthy();
    }
  ));
});
