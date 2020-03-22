/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { PSurveyResponseService } from "./p-survey-response.service";

describe("Service: PSurveyResponse", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PSurveyResponseService]
    });
  });

  it("should ...", inject(
    [PSurveyResponseService],
    (service: PSurveyResponseService) => {
      expect(service).toBeTruthy();
    }
  ));
});
