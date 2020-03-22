/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { OpenCollectorComponent } from "./open-collector.component";

describe("OpenCollectorComponent", () => {
  let component: OpenCollectorComponent;
  let fixture: ComponentFixture<OpenCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCollectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
