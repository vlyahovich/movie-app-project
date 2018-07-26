import {Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {routerTransition} from './animations/routerTransition';

const MOBILE_QUERY = '(max-width: 731px)';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition()]
})
export class AppComponent implements OnInit, OnDestroy {
  inited: boolean;
  isMobileQuery: MediaQueryList;
  routerSubscription: any;

  private mqListener: () => void;

  @ViewChild('nav') nav: any;

  constructor(private router: Router, private media: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    this.isMobileQuery = media.matchMedia(MOBILE_QUERY);
    this.mqListener = () => changeDetectorRef.detectChanges();
    this.isMobileQuery.addListener(this.mqListener);

    this.routerSubscription = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      document.querySelector('.nav-content').scrollTop = 0;
    });
  }

  searchQuery(query: string) {
    if (query.trim() !== '') {
      this.router.navigate(['/search', query]);
    }
  }

  closeNav() {
    if (this.isMobileQuery.matches !== false) {
      this.nav.close();
    }
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {
    this.inited = true;
  }

  ngOnDestroy() {
    this.isMobileQuery.removeListener(this.mqListener);
    this.routerSubscription.unsubscribe();
  }
}
