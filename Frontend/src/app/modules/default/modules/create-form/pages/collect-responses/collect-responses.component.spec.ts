/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CollectResponsesComponent } from "./collect-responses.component";

describe("CollectResponsesComponent", () => {
  let component: CollectResponsesComponent;
  let fixture: ComponentFixture<CollectResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectResponsesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
