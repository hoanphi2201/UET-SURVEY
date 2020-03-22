/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PreviewScoreComponent } from "./preview-score.component";

describe("PreviewScoreComponent", () => {
  let component: PreviewScoreComponent;
  let fixture: ComponentFixture<PreviewScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewScoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
