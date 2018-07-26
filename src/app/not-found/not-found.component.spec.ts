import {TestBed, async} from '@angular/core/testing';

import {
  MatIconModule
} from '@angular/material';

import {PageNotFoundComponent} from './not-found.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
      imports: [
        MatIconModule
      ]
    }).compileComponents();
  }));

  it('should create the not found page', async(() => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
