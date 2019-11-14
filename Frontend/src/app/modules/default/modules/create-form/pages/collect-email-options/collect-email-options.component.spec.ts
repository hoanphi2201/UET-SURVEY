/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollectEmailOptionsComponent } from './collect-email-options.component';

describe('CollectEmailOptionsComponent', () => {
  let component: CollectEmailOptionsComponent;
  let fixture: ComponentFixture<CollectEmailOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectEmailOptionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectEmailOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
