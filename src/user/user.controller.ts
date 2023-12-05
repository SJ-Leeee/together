import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Get()
  // getUsers(@User() user) {
  //   return user || false;
  // }
  //   @Post()
  //   async join(@Body() body: JoinRequestDto) {
  //     await this.userService.join(body.email, body.nickname, body.password);
  //   }

  //   @Post('login')
  //   logIn(@User() user) {
  //     return user;
  //   }
  //   @Post('logout')
  //   logOut(@Req() req, @Res() res) {
  //     req.logOut();
  //     res.clearCookie('connect.sid', { httpOnly: true });
  //     res.send('ok');
  //   }
}
