import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';
import { Chats } from './Chats';
import { UserInSpace } from './UserInSpace';
import { Invites } from './Invites';
@Entity({ schema: 'together', name: 'spaces' })
export class Spaces {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

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

  @ManyToOne(() => Users, (user) => user.Spaces, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Host_id', referencedColumnName: 'id' }])
  HostId: Users;

  @OneToMany(() => Chats, (chats) => chats.SpaceId, { cascade: true })
  Chats: Chats[];
  //  채팅 외래키 1:N

  @OneToMany(() => UserInSpace, (UserInSpace) => UserInSpace.SpaceId, {
    cascade: true,
  })
  UserInSpace: UserInSpace[];
  //  유저인스페이스 외래키 1:N

  @OneToMany(() => Invites, (Invites) => Invites.SpaceId, {
    cascade: true,
  })
  Invites: Invites[];
}
