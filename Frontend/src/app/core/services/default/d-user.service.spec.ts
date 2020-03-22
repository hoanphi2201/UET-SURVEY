/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { DUserService } from "./d-user.service";

describe("Service: DUser", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DUserService]
    });
  });

  it("should ...", inject([DUserService], (service: DUserService) => {
    expect(service).toBeTruthy();
  }));
});
