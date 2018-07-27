import {MoviesAPIService} from './movies.service';
import {async} from '@angular/core/testing';
import {genreType} from './movie.model';

describe('MoviesService', () => {
    let service: MoviesAPIService;

    beforeEach(() => service = new MoviesAPIService());

    it('should return all movies', async(() => {
        service.getAll().then((movies) => {
            expect(movies.length).toBe(24);
        });
    }));

    it('should get movie by id', async(() => {
        service.getMovie(10).then((movie) => {
            expect(movie).toBeDefined();

            if (movie) {
                expect(movie.id).toBe(10);
            }
        });
    }));

    it('should search movie by name', async(() => {
        service.search('straight').then((movies) => {
            expect(movies.length).toBe(1);
            expect(movies[0].name).toBe('Straight Outta Compton');
        });
    }));

    it('should search movie by name', async(() => {
        service.search('straight').then((movies) => {
            expect(movies.length).toBe(1);
            expect(movies[0].name).toBe('Straight Outta Compton');
        });
    }));

    it('should search movie by description', async(() => {
        service.search('veteran').then((movies) => {
            expect(movies.length).toBe(1);
            expect(movies[0].name).toBe('We\'re the Millers');
        });
    }));

    it('should filter by genre', async(() => {
        service.filterGenre(genreType.action).then((movies) => {
            expect(movies.length).toBe(15);
            expect(movies[0].genres).toContain(genreType.action);
        });
    }));
});
