/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenameCollectorComponent } from './rename-collector.component';

describe('RenameCollectorComponent', () => {
  let component: RenameCollectorComponent;
  let fixture: ComponentFixture<RenameCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenameCollectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
