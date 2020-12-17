import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillsComponent} from './skills.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TileAttributes} from 'src/app/pojo/tile-attributes';
import {TileComponent} from 'src/app/ui/tile/tile.component';
import {TileGroupComponent} from 'src/app/ui/tile-group/tile-group.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          SkillsComponent,
          TileComponent,
          TileGroupComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right amount of tiles', () => {
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
