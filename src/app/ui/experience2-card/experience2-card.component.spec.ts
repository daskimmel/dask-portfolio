import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience2CardComponent } from './experience2-card.component';

describe('Experience2CardComponent', () => {
  let component: Experience2CardComponent;
  let fixture: ComponentFixture<Experience2CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experience2CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experience2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
