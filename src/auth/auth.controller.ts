import { Controller, Post } from '@nestjs/common';
import { UserService } from 'src/types/shared/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(userDTD: any) {
    return await this.userService.findByLogin(userDTD);
  }

  @Post('register')
  async register(userDTD: any) {
    return await this.userService.create(userDTD);
  }
}
