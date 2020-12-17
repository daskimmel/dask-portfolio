import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience2CardComponent } from './experience2-card.component';
import {Experience2Component} from 'src/app/pages/experience2/experience2.component';
import {ExperienceAttributes} from '../../pojo/experience-attributes';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

const mockExperienceAttributes: Array<ExperienceAttributes> = [{
  'header': "FAKE HEADER 1",
  'body': "FAKE BODY 1",
  'images': [],
  'color': 'white'
}, {
  'header': "FAKE BODY 2",
  'body': "FAKE BODY 2",
  'images': [],
  'color': 'white'
}];

describe('Experience2CardComponent', () => {
  let component: Experience2Component;
  let fixture: ComponentFixture<Experience2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          Experience2Component,
          Experience2CardComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experience2Component);
    component = fixture.componentInstance;
    component.experienceAttributes = mockExperienceAttributes;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const experienceCards: DebugElement[] = fixture.debugElement.queryAll(By.directive(Experience2CardComponent));
    expect(experienceCards.length).toEqual(mockExperienceAttributes.length);
  });
});
