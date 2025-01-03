import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BooksAppModule } from './books-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BooksAppModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });
  await app.listen();
}

bootstrap();
