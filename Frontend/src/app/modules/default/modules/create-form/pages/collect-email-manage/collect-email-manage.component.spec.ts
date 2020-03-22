/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CollectEmailManageComponent } from "./collect-email-manage.component";

describe("CollectEmailManageComponent", () => {
  let component: CollectEmailManageComponent;
  let fixture: ComponentFixture<CollectEmailManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectEmailManageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectEmailManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
