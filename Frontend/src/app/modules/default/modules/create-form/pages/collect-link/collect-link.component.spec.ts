/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CollectLinkComponent } from "./collect-link.component";

describe("CollectLinkComponent", () => {
  let component: CollectLinkComponent;
  let fixture: ComponentFixture<CollectLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectLinkComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
