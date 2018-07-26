import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SharedModule} from '../shared/shared.module';

import {PageListComponent} from './list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageListComponent
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    }).compileComponents();
  }));

  it('should create the list page', async(() => {
    const fixture = TestBed.createComponent(PageListComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
