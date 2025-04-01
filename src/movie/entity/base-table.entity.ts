import { Column, CreateDateColumn, Entity, VersionColumn } from 'typeorm';

@Entity()
export class BaseTable {
  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}