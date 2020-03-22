/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { RoleGrantService } from "./role-grant.service";

describe("Service: RoleGrant", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGrantService]
    });
  });

  it("should ...", inject([RoleGrantService], (service: RoleGrantService) => {
    expect(service).toBeTruthy();
  }));
});
