import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExperienceCardComponent} from './experience-card.component';
import {ExperienceAttributes} from '../../pojo/experience-attributes';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ExperienceComponent} from '../../pages/experience/experience.component';

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

describe('ExperienceCardComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ExperienceComponent,
          ExperienceCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    component.experienceAttributes = mockExperienceAttributes;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const experienceCards: DebugElement[] = fixture.debugElement.queryAll(By.directive(ExperienceCardComponent));
    expect(experienceCards.length).toEqual(mockExperienceAttributes.length);
  });
});
