/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DSurveyFolderService } from './d-survey-folder.service';

describe('Service: DSurveyFolder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSurveyFolderService]
    });
  });

  it('should ...', inject(
    [DSurveyFolderService],
    (service: DSurveyFolderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
