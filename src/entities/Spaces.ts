import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ schema: 'together', name: 'spaces' })
export class Spaces {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'Host_id' })
  Host_id: number;

  @Column('text', { name: 'space_name' })
  space_name: string;

  @Column('boolean', { name: 'private', default: false })
  private: boolean;

  @Column('string', { name: 'password', nullable: true })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
