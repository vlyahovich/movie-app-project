import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRouterModule} from './app-router.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {PageListComponent} from './list/list.component';
import {PageDetailsComponent} from './details/details.component';
import {PageNotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRouterModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
