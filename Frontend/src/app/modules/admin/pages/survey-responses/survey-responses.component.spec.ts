/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SurveyResponsesComponent } from "./survey-responses.component";

describe("SurveyResponsesComponent", () => {
  let component: SurveyResponsesComponent;
  let fixture: ComponentFixture<SurveyResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyResponsesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
