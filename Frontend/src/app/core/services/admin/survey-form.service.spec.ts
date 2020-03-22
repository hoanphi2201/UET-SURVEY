/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SurveyFormService } from "./survey-form.service";

describe("Service: SurveyForm", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyFormService]
    });
  });

  it("should ...", inject([SurveyFormService], (service: SurveyFormService) => {
    expect(service).toBeTruthy();
  }));
});
