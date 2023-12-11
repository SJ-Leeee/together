import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './dto/payload';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async registerUser(data): Promise<Users> {
    // 회원가입
    const { email, nickname, password, name, age, team } = data;
    const findUser = await this.userRepository.findOne({ where: { email } });
    if (findUser) {
      throw new HttpException('이미 존재하는 계정입니다.', HttpStatus.CONFLICT);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    //트랜잭션
    const newUser = this.userRepository.create({
      email,
      nickname,
      password: hashPassword,
      name,
      age,
      team,
    });
    console.log(newUser);
    await this.userRepository.save(newUser);

    return newUser;
  }

  async validateUser(data) {
    // 로그인
    const { email, password } = data;
    const findUser = await this.userRepository.findOne({ where: { email } });
    const validatePassword = await bcrypt.compare(password, findUser.password);
    if (!findUser || !validatePassword) {
      throw new HttpException(
        '올바른 정보가 아닙니다.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload: Payload = {
      id: findUser.id,
      username: findUser.name,
    };
    return { accessToken: this.jwtService.sign(payload) };
  }
  async tokenValidateUser(payload: Payload): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { id: payload.id },
    });

    const { password, ...result } = user;
    return result;
  }
}
