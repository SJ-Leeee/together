import { DataSource } from 'typeorm';
require('dotenv').config();
import { Users } from './src/entities/Users';
import { Chats } from './src/entities/Chats';
import { Spaces } from './src/entities/Spaces';
import { UserInSpace } from './src/entities/UserInSpace';
import { Invites } from './src/entities/Invites';

// dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: +process.env.MYSQL_USERNAME,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Users, Spaces, Chats, Invites, UserInSpace],
  migrations: [__dirname + '/src/migrations/*.ts'],
  charset: 'utf8mb4_general_ci',
  synchronize: false,
  logging: true,
});

export default dataSource;
// 아마 db:create 하기 위해 있는것
