import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { UserJoinRequestDto } from 'src/user/dto/user-join-request.dto';
import { Users } from 'src/entities/Users';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtAuthGuard } from './jwt-guard';
import { User } from 'src/common/decorator/user.decorator';

@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // 회원가입
  @Post('register')
  async registerUser(@Body() data: UserJoinRequestDto): Promise<Users> {
    return await this.authService.registerUser(data);
  }

  @Post('login')
  // @Header('Cach-Control', 'none')
  async login(@Body() data: UserLoginDto, @Res() res: Response): Promise<any> {
    const jwt = await this.authService.validateUser(data);
    res.cookie('Authorization', `Bearer ${jwt.accessToken} `);
    return res.json(jwt);
  }

  // 가드(AuthGuard) 추가해주기
  @Get('/authenticate')
  @UseGuards(JwtAuthGuard)
  isAuthenticated(@User() user): any {
    return user;
  }
}
