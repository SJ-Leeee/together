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
@Entity({ schema: 'together', name: 'userInSpace' })
export class UserInSpace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.UserInSpace, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'User_id', referencedColumnName: 'id' }])
  UserId: Users;

  @ManyToOne(() => Spaces, (space) => space.UserInSpace, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Space_id', referencedColumnName: 'id' }])
  SpaceId: Spaces;
}
