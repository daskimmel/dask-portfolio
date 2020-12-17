import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavigationComponent} from './ui/navigation/navigation.component';
import {CloudsComponent} from './ui/clouds/clouds.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        CloudsComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'dask-portfolio'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dask-portfolio');
  });

});
