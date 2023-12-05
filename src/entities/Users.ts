import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Spaces } from './Spaces';
import { Chats } from './Chats';
import { UserInSpace } from './UserInSpace';
import { Invites } from './Invites';

@Entity({ schema: 'together', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', length: 255, unique: true })
  email: string;

  @Column('text', { name: 'password' })
  password: string;

  @Column('text', { name: 'nickname' })
  nickname: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('int', { name: 'age' })
  age: number;

  @Column('text', { name: 'team', nullable: true })
  team: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Spaces, (spaces) => spaces.HostId, { cascade: true })
  Spaces: Spaces[];
  //  스페이스 외래키 1:N

  @OneToMany(() => Chats, (chats) => chats.UserId, { cascade: true })
  Chats: Chats[];
  //  채팅 외래키 1:N

  @OneToMany(() => UserInSpace, (UserInSpace) => UserInSpace.UserId, {
    cascade: true,
  })
  UserInSpace: UserInSpace[];
  //  유저인스페이스 외래키 1:N

  @OneToMany(() => Invites, (Invites) => Invites.HostId, {
    cascade: true,
  })
  HostUserId: Invites[];

  @OneToMany(() => Invites, (Invites) => Invites.TargetId, {
    cascade: true,
  })
  TargetUserId: Invites[];
}
