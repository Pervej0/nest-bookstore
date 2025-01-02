import { Injectable } from '@nestjs/common';
import { UserData } from '../dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserData[] = [
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Smith',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 25,
    },
    {
      id: 3,
      firstName: 'Charlie',
      lastName: 'Brown',
      age: 25,
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }
}
