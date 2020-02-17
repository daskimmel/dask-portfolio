import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import {ExperienceAttributes} from '../../pojo/experience-attributes';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ExperienceCardComponent} from '../../ui/experience-card/experience-card.component';
import {TileAttributes} from '../../pojo/tile-attributes';
import {TileComponent} from '../../ui/tile/tile.component';

describe('SkillsComponentComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          SkillsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display right amount of experience cards', () => {
    const fakeHeader1 = "FAKE HEADER 1";
    const fakeHeader2 = "FAKE HEADER 2";
    const experienceAttributes: Array<TileAttributes> = [{
      'name': fakeHeader1,
      'image': ''
    }, {
      'name': fakeHeader2,
      'image': ''
    }];
    component.tileList = experienceAttributes;
    fixture.detectChanges();

    const tileComponents: DebugElement[] = fixture.debugElement.queryAll(By.directive(TileComponent));
    expect(tileComponents.length).toEqual(experienceAttributes.length);
  });
});
