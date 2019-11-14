/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollectEmailComposeComponent } from './collect-email-compose.component';

describe('CollectEmailComposeComponent', () => {
  let component: CollectEmailComposeComponent;
  let fixture: ComponentFixture<CollectEmailComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectEmailComposeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectEmailComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
