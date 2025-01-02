import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserData } from './dto/user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.getAll')
  getAll(): UserData[] {
    console.log('Hellooo');
    return this.usersService.getAll();
  }
}
