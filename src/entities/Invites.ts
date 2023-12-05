import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';
import { Spaces } from './Spaces';
@Entity({ schema: 'together', name: 'invites' })
export class Invites {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.HostUserId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Host_id', referencedColumnName: 'id' }])
  HostId: Users;

  @ManyToOne(() => Users, (user) => user.TargetUserId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Target_id', referencedColumnName: 'id' }])
  TargetId: Users;

  @ManyToOne(() => Spaces, (space) => space.Invites, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Space_id', referencedColumnName: 'id' }])
  SpaceId: Spaces;
}
