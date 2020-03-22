/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { GridSurveyComponent } from "./grid-survey.component";

describe("GridSurveyComponent", () => {
  let component: GridSurveyComponent;
  let fixture: ComponentFixture<GridSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridSurveyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
