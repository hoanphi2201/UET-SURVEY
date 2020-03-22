/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { RoleGrantsComponent } from "./role-grants.component";

describe("RoleGrantsComponent", () => {
  let component: RoleGrantsComponent;
  let fixture: ComponentFixture<RoleGrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoleGrantsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
