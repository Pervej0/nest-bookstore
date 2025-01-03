import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BookDto } from './dto/book.dto';
import { BookDto as ClientBookDto } from '@app/contracts/books/book.dto';
import { map } from 'rxjs';
import { BOOKS_PATTERN } from '@app/contracts/books/books.pattern';
import { BOOKS_CLIENT } from './constant';

@Injectable()
export class BooksService {
  constructor(@Inject(BOOKS_CLIENT) private booksCLient: ClientProxy) {}
  private mapBookData(items: ClientBookDto[]): {
    success: boolean;
    message: string;
    data: BookDto[];
  } {
    const data = items.map((item) => ({ id: item.id, title: item.title }));
    return {
      success: true,
      message: 'Retrieved successfully!',
      data,
    };
  }

  create(createBookDto: CreateBookDto) {
    return this.booksCLient.send(BOOKS_PATTERN.CREATE, createBookDto);
  }

  getAll() {
    return this.booksCLient
      .send(BOOKS_PATTERN.GET_ALL, {})
      .pipe(map(this.mapBookData));
  }

  getOne(id: number) {
    return this.booksCLient.send(BOOKS_PATTERN.GET_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksCLient.send(BOOKS_PATTERN.UPDATE, {
      id,
      ...updateBookDto,
    });
  }

  remove(id: number) {
    return this.booksCLient.send(BOOKS_PATTERN.REMOVE, id);
  }
}
