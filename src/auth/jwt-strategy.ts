import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
// require('dotenv').config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY, // 1
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // 2
    });
  }

  async validate(payload: any) {
    console.log(payload);
    // const user = await this.authService.validateUser();
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return done(null, user);
  }
}
