import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Experience2Component } from './experience2.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {ExperienceAttributes} from 'src/app/pojo/experience-attributes';
import {Experience2CardComponent} from 'src/app/ui/experience2-card/experience2-card.component';

describe('ExperienceComponent', () => {
  let component: Experience2Component;
  let fixture: ComponentFixture<Experience2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          Experience2Component,
          Experience2CardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experience2Component);
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
      'images': [],
      'color': 'white'
    }, {
      'header': fakeHeader2,
      'body': fakeBody2,
      'images': [],
      'color': 'white'
    }];
    component.experienceAttributes = experienceAttributes;
    fixture.detectChanges();

    const experienceCards: DebugElement[] = fixture.debugElement.queryAll(By.directive(Experience2CardComponent));
    expect(experienceCards.length).toEqual(experienceAttributes.length);
  });
});
