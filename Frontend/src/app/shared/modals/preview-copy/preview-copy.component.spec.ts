/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PreviewCopyComponent } from "./preview-copy.component";

describe("PreviewCopyComponent", () => {
  let component: PreviewCopyComponent;
  let fixture: ComponentFixture<PreviewCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewCopyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
