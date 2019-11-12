/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DSurveyCollectorService } from './d-survey-collector.service';

describe('Service: DSurveyCollector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSurveyCollectorService]
    });
  });

  it('should ...', inject(
    [DSurveyCollectorService],
    (service: DSurveyCollectorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
