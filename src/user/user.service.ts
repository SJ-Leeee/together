import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async join(data): Promise<Users> {
    const { email, nickname, password, name, age, team } = data;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('이미 존재하는 계정입니다.', HttpStatus.CONFLICT);
    }
    const hashPassword = bcrypt.hash(password, 10);
    //트랜잭션
    const newUser = this.userRepository.create({
      email,
      nickname,
      password: hashPassword,
      name,
      age,
      team,
    });
    await this.userRepository.save(newUser);

    return newUser;
  }

  test(): string {
    return 'not';
  }
}
