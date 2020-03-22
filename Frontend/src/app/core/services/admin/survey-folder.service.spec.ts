/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SurveyFolderService } from "./survey-folder.service";

describe("Service: SurveyFolder", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyFolderService]
    });
  });

  it("should ...", inject(
    [SurveyFolderService],
    (service: SurveyFolderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
