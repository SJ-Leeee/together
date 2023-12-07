import { PickType } from '@nestjs/swagger';
import { UserJoinRequestDto } from 'src/user/dto/user-join-request.dto';

export class UserLoginDto extends PickType(UserJoinRequestDto, [
  'email',
  'password',
]) {}
