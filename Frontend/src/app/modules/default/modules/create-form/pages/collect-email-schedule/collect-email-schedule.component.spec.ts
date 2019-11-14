/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollectEmailScheduleComponent } from './collect-email-schedule.component';

describe('CollectEmailScheduleComponent', () => {
  let component: CollectEmailScheduleComponent;
  let fixture: ComponentFixture<CollectEmailScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectEmailScheduleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectEmailScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
