/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { DesignSurveyComponent } from "./design-survey.component";

describe("DesignSurveyComponent", () => {
  let component: DesignSurveyComponent;
  let fixture: ComponentFixture<DesignSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSurveyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
