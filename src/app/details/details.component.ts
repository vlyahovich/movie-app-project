import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {moviesServiceProvider, MoviesAPIService} from '../api/movies.service';
import {Movie} from '../api/movie.model';

@Component({
    selector: 'app-movie-details',
    providers: [moviesServiceProvider],
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class PageDetailsComponent implements OnInit, OnDestroy {
    isLoading: boolean;
    movie: Movie | void;
    routeSub: any;

    constructor(public moviesAPIService: MoviesAPIService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.isLoading = true;

        this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
            const id = Number(params.get('id'));

            this.moviesAPIService
                .getMovie(id)
                .then((movie) => {
                    this.movie = movie;
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
