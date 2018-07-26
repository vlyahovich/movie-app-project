import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MoviesAPIService} from '../api/movies.service';
import {Movie} from '../api/movie.model';
import {itemTransition} from '../animations/itemTransition';

@Component({
    selector: 'app-movies-list',
    providers: [MoviesAPIService],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [itemTransition()]
})
export class PageListComponent implements OnInit, OnDestroy {
    isLoading: boolean;
    movies: Movie[];
    moviesLength: number;
    routeSub: any;

    constructor(public moviesAPIService: MoviesAPIService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.isLoading = true;

        this.routeSub = this.route.params.subscribe((params: ParamMap) => {
            let promise = null;

            if (params['query']) {
                promise = this.moviesAPIService.search(params['query']);
            } else if (params['genre']) {
                promise = this.moviesAPIService.filterGenre(params['genre']);
            } else {
                promise = this.moviesAPIService.getAll();
            }

            promise
                .then((movies) => {
                    this.moviesLength = movies.length;
                    this.movies = movies;
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.error(err);

                    this.isLoading = false;
                });
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
