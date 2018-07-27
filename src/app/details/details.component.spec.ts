import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {PageDetailsComponent} from './details.component';

const MOVIE_ID = 10;

describe('PageDetailsComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageDetailsComponent
      ],
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: {
            subscribe: (fn) => fn({get: () => MOVIE_ID})
          }
        }
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(PageDetailsComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the details page', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the details page', async(() => {
    const el = fixture.nativeElement;

    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(el.querySelector('.movie-title').textContent).toBe('The Man from U.N.C.L.E.');
      expect(el.querySelector('.mat-card-image').getAttribute('src')).toBe('assets/images/covers/the-man-from-uncle.jpg');
      expect(el.querySelector('.mat-card-content').textContent).toBe(' In the early 1960s, CIA agent ' +
        'Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a ' +
        'mysterious criminal organization, which is working to proliferate nuclear weapons. movie action, ' +
        'adventure, thriller star 7.3 timer 1hr 56mins ');
      expect(el.querySelector('.movie-info_genres').textContent).toBe('movie action, adventure, thriller ');
      expect(el.querySelector('.movie-info_rate').textContent).toBe('star 7.3 ');
      expect(el.querySelector('.movie-info_length').textContent).toBe('timer 1hr 56mins ');
    });
  }));
});
