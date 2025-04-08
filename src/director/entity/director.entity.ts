import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTable } from '../../common/entity/base-table.entity';
import { Movie } from '../../movie/entity/movie.entity';

@Entity()
export class Director extends BaseTable {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  nationality: string;

  @OneToMany(
    () => Movie,
    movie => movie.director,
  )
  movies: Movie[];
}
