/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SurveySendsComponent } from "./survey-sends.component";

describe("SurveySendsComponent", () => {
  let component: SurveySendsComponent;
  let fixture: ComponentFixture<SurveySendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveySendsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
