import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ schema: 'together', name: 'spaces' })
export class Invites {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'Host_id' })
  Host_id: number;

  @Column('int', { name: 'Target_id' })
  Target_id: number;

  @Column('int', { name: 'Space_id' })
  Space_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
