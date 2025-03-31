import { Column, Entity } from 'typeorm';

@Entity()
export class BaseTable {
  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  version: number;
}