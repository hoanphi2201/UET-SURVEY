/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PastSurveyComponent } from "./past-survey.component";

describe("PastSurveyComponent", () => {
  let component: PastSurveyComponent;
  let fixture: ComponentFixture<PastSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PastSurveyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
