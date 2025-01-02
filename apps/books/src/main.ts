import { NestFactory } from '@nestjs/core';
import { BooksAppModule } from './books.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BooksAppModule, {
    transport: Transport.TCP,
    options: {
      port: process.env.port ?? 3002,
    },
  });
  await app.listen();
}
bootstrap();
