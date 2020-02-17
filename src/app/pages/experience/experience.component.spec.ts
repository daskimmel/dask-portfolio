import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import {By} from '@angular/platform-browser';
import {ExperienceCardComponent} from '../../ui/experience-card/experience-card.component';
import {DebugElement} from '@angular/core';
import {ExperienceAttributes} from '../../pojo/experience-attributes';

describe('ExperienceComponent', () => {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right amount of experience cards', () => {
    const fakeHeader1 = "FAKE HEADER 1";
    const fakeBody1 = "FAKE BODY 1";
    const fakeHeader2 = "FAKE HEADER 2";
    const fakeBody2 = "FAKE BODY 2";
    const experienceAttributes: Array<ExperienceAttributes> = [{
      'header': fakeHeader1,
      'body': fakeBody1,
      images: []
    }, {
      'header': fakeHeader2,
      'body': fakeBody2,
      images: []
    }];
    component.experienceAttributes = experienceAttributes;
    fixture.detectChanges();

    const experienceCards: DebugElement[] = fixture.debugElement.queryAll(By.directive(ExperienceCardComponent));
    expect(experienceCards.length).toEqual(experienceAttributes.length);
  });
});
