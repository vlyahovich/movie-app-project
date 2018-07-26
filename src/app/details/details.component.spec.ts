import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SharedModule} from '../shared/shared.module';

import {PageDetailsComponent} from './details.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageDetailsComponent
      ],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the details page', async(() => {
    const fixture = TestBed.createComponent(PageDetailsComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
