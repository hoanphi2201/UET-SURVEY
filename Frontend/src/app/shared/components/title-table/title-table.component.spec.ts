/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitleTableComponent } from './title-table.component';

describe('TitleTableComponent', () => {
  let component: TitleTableComponent;
  let fixture: ComponentFixture<TitleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
