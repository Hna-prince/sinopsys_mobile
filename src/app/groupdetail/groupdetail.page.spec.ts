import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdetailPage } from './groupdetail.page';

describe('GroupdetailPage', () => {
  let component: GroupdetailPage;
  let fixture: ComponentFixture<GroupdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
