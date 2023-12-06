import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserJoinRequestDto } from './dto/user-join-request.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptor/undefined-to-null.interceptor';
import { Users } from 'src/entities/Users';

// @UseInterceptors(UndefinedToNullInterceptor)
// @UsePipes(ValidationPipe)
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // 회원가입
  @Post()
  async join(@Body() data: UserJoinRequestDto): Promise<Users> {
    const user = await this.userService.join(data);
    console.log(data);
    return user;
  }

  @Get()
  testGet() {
    return this.userService.test();
  }
  // 로그인
  // 유저정보가져오기

  // @ApiResponse({
  //   type: UserDto,
  // })
  // @ApiOperation({ summary: '내 정보 조회' })
  // @Get()
  // getUser(@User() user) {
  //   return user || false;
  // }

  // @ApiOkResponse({
  //   // status:200
  //   description: '성공',
  //   type: UserDto,
  // })
  // @ApiOperation({ summary: '로그인' })
  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // login(@User() user) {
  //   return user;
  // }

  // @ApiOperation({ summary: '로그아웃' })
  // @UseGuards(LoggedInGuard)
  // @Post('logout')
  // logout(@Req() req, @Res() res) {
  //   req.logout(); // passport 로 구현
  //   res.clearCookie('connect.sid', { httpOnluy: true });
  //   res.send('ok');
  // }
}
