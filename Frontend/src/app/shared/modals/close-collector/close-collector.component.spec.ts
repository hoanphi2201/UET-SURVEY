/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CloseCollectorComponent } from './close-collector.component';

describe('CloseCollectorComponent', () => {
  let component: CloseCollectorComponent;
  let fixture: ComponentFixture<CloseCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloseCollectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
