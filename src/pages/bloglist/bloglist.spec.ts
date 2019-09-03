import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistPage } from './bloglist';

describe('BloglistPage', () => {
  let component: BloglistPage;
  let fixture: ComponentFixture<BloglistPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BloglistPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
