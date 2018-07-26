import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageListComponent} from './list/list.component';
import {PageDetailsComponent} from './details/details.component';
import {PageNotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
    {path: 'list', component: PageListComponent},
    {path: 'list/:id', component: PageDetailsComponent},
    {path: 'search/:query', component: PageListComponent},
    {path: 'genre/:genre', component: PageListComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {}
