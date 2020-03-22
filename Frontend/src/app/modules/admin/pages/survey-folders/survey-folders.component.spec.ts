/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SurveyFoldersComponent } from "./survey-folders.component";

describe("SurveyFoldersComponent", () => {
  let component: SurveyFoldersComponent;
  let fixture: ComponentFixture<SurveyFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyFoldersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
