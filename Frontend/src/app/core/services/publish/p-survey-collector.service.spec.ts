/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { PSurveyCollectorService } from "./p-survey-collector.service";

describe("Service: PSurveyCollector", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PSurveyCollectorService]
    });
  });

  it("should ...", inject(
    [PSurveyCollectorService],
    (service: PSurveyCollectorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
