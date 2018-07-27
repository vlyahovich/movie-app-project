import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';

import {PageListComponent} from './list.component';

describe('PageListComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageListComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        SharedModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the list page', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the list page', async(() => {
    const el = fixture.nativeElement;

    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(el.querySelectorAll('.movies-item').length).toBe(24);
    });
  }));
});
