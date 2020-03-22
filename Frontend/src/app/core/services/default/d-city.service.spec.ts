/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { DCityService } from "./d-city.service";

describe("Service: DCity", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DCityService]
    });
  });

  it("should ...", inject([DCityService], (service: DCityService) => {
    expect(service).toBeTruthy();
  }));
});
