import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ schema: 'together', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'email', unique: true })
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

  //   @ManyToOne(() => Workspaces, (workspaces) => workspaces.DMs, {
  //     onDelete: 'SET NULL',
  //     onUpdate: 'CASCADE',
  //   })
  //   @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  //   Workspace: Workspaces;

  //   @ManyToOne(() => Users, (users) => users.DMs, {
  //     onDelete: 'SET NULL',
  //     onUpdate: 'CASCADE',
  //   })
  //   @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  //   Sender: Users;

  //   @ManyToOne(() => Users, (users) => users.DMs2, {
  //     onDelete: 'SET NULL',
  //     onUpdate: 'CASCADE',
  //   })
  //   @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  //   Receiver: Users;
}
