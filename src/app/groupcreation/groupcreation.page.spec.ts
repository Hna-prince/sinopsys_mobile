import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupcreationPage } from './groupcreation.page';

describe('GroupcreationPage', () => {
  let component: GroupcreationPage;
  let fixture: ComponentFixture<GroupcreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupcreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupcreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
