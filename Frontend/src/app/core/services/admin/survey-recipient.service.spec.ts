/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SurveyRecipientService } from "./survey-recipient.service";

describe("Service: SurveyRecipient", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyRecipientService]
    });
  });

  it("should ...", inject(
    [SurveyRecipientService],
    (service: SurveyRecipientService) => {
      expect(service).toBeTruthy();
    }
  ));
});
