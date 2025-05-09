import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Movie } from './entity/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieDetail } from './entity/movie-detail.entity';
import { Director } from '../director/entity/director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, MovieDetail, Director])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
