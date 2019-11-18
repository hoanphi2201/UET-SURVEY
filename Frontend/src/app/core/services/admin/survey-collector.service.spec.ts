/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SurveyCollectorService } from './survey-collector.service';

describe('Service: SurveyCollector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyCollectorService]
    });
  });

  it('should ...', inject([SurveyCollectorService], (service: SurveyCollectorService) => {
    expect(service).toBeTruthy();
  }));
});
