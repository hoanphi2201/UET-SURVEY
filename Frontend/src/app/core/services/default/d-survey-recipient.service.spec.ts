/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { DSurveyRecipientService } from "./d-survey-recipient.service";

describe("Service: DSurveyRecipient", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSurveyRecipientService]
    });
  });

  it("should ...", inject(
    [DSurveyRecipientService],
    (service: DSurveyRecipientService) => {
      expect(service).toBeTruthy();
    }
  ));
});
