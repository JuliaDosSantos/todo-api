import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginService {
  constructor(private readonly userService: UserService) {}

  async login(createLoginDto: CreateLoginDto) {
    const user = await this.userService.findByEmail(createLoginDto.email);
    if (createLoginDto.senha === user.senha){
      return true;
    } 
    return false;
  }

}
