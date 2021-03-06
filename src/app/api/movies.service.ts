import {Injectable} from '@angular/core';

import {Movie, GenreType} from './movie.model';
import {movies} from './movies.data';

@Injectable()
export class MoviesAPIService {
  constructor() {}

  getAll(): Promise<Movie[]> {
    return Promise.resolve(movies);
  }

  getMovie(id: number): Promise<Movie | void> {
    return Promise.resolve(movies.find((m) => m.id === id));
  }

  search(query: string): Promise<Movie[]> {
    const q = decodeURIComponent(query).toLowerCase();

    return Promise.resolve(movies.filter((m) => {
      return m.name.toLocaleLowerCase().indexOf(q) !== -1 || m.description.toLocaleLowerCase().indexOf(q) !== -1;
    }));
  }

  filterGenre(genre: GenreType): Promise<Movie[]> {
    return Promise.resolve(movies.filter((m) => m.genres.includes(genre)));
  }
}
