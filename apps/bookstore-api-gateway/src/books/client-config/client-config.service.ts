import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      validationSchema: joi.object({
        USERS_CLIENT_PORT: joi.number().default(3001),
        BOOKS_CLIENT_PORT: joi.number().default(3002),
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class ClientConfigModule {}
