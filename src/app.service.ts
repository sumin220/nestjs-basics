import { Injectable, NotFoundException } from '@nestjs/common';

export interface Movie {
  id: number;
  title: string;
}

// 클래스를 알아서 IoC 컨테이너에서 관리를 해줌
@Injectable()
export class AppService {
  private movies: Movie[] = [
    {
      id: 1,
      title: '해리포터',
    },
    {
      id: 2,
      title: '반지의 제왕',
    },
  ];

  getManyMovies(title?: string) {
    if (!title) {
      return this.movies;
    }

    return this.movies.filter((m) => m.title.startsWith(title));
  }

  getMovieById(id: number) {
    const movie = this.movies.find((m) => m.id === +id);

    if (!movie) {
      throw new NotFoundException('존재하지 않는 ID의 영화입니다.');
    }

    return movie;
  }

  private idCounter = 3;

  createMovie(title: string) {
    const movie: Movie = {
      id: this.idCounter++,
      title: title,
    };
    this.movies.push(movie);
    return movie;
  }

  updateMovie(id: number, title: string) {
    const movie = this.movies.find((m) => m.id === +id);
    if (!movie) {
      throw new NotFoundException('존재하지 않는 ID의 영화입니다.');
    }

    Object.assign(movie, { title });

    return movie;
  }

  deleteMovie(id: number) {
    const movieIndex = this.movies.findIndex((m) => m.id === +id);
    if (movieIndex === -1) {
      throw new NotFoundException('존재하지 않는 ID의 영화입니다.');
    }

    this.movies.splice(movieIndex, 1);
    return id;
  }
}
