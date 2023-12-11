import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Payload } from './dto/payload';
import * as cookie from 'cookie';
require('dotenv').config();

const fromAuthCookie = function () {
  return function (request) {
    let token = null;
    const cookies = cookie.parse(request.headers.cookie || '');
    if (cookies) {
      token = cookies['Authorization'];
    }
    return token.split(' ')[1];
  };
};
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY, // 1
      jwtFromRequest: fromAuthCookie(),
      ignoreExpiration: false, // 2
    });
  }

  async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
    const user = await this.authService.tokenValidateUser(payload);
    if (!user) {
      throw new HttpException('유저가 존재하지 않습니다.', HttpStatus.CONFLICT);
    }
    return done(null, user);
  }
}
