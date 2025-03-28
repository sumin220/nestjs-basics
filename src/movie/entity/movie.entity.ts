import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTable } from './base-Table.entity';

@Entity()
export class Movie extends BaseTable{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;
}