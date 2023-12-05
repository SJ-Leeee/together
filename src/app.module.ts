import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chats } from './entities/Chats';
import { Users } from './entities/Users';
import { Invites } from './entities/Invites';
import { UserInSpace } from './entities/UserInSpace';
import { Spaces } from './entities/Spaces';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Chats, Users, Invites, UserInSpace, Spaces, Users],
      synchronize: true,
      keepConnectionAlive: true,
      logging: true,
      charset: 'utf8mb4',
      // 이모티콘 쓰기 위해
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
