/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { DSurveyFormService } from "./d-survey-form.service";

describe("Service: DSurveyForm", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSurveyFormService]
    });
  });

  it("should ...", inject(
    [DSurveyFormService],
    (service: DSurveyFormService) => {
      expect(service).toBeTruthy();
    }
  ));
});
