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

  @Column('int', { name: 'User_id' })
  User_id: number;

  @Column('int', { name: 'Space_id' })
  Space_id: number;

  @Column('text', { name: 'message' })
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
