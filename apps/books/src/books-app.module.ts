import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

console.log('first');
@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [],
})
export class BooksAppModule {}
