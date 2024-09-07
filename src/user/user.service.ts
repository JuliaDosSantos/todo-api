import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from './repositories/iuser.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private repository: IUserRepository
  ){}

  create(createUserDto: CreateUserDto) {
    const user = new User();

    user.nome = createUserDto.nome;
    user.email = createUserDto.email;
    user.senha = createUserDto.senha;

    this.repository.create(createUserDto);
  }

  findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }
}
