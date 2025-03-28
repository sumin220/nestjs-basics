import { Column, Entity } from 'typeorm';

@Entity()
export class MovieDetail {
  @Column()
  detail: string;
}