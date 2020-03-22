/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SurveyResponseService } from "./survey-response.service";

describe("Service: SurveyResponse", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyResponseService]
    });
  });

  it("should ...", inject(
    [SurveyResponseService],
    (service: SurveyResponseService) => {
      expect(service).toBeTruthy();
    }
  ));
});
