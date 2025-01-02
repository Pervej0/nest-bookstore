import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private booksCLient: ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    return this.booksCLient.send('books.create', createBookDto);
  }

  getAll() {
    return this.booksCLient.send('books.getAll', {});
  }

  getOne(id: number) {
    return this.booksCLient.send('books.getOne', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksCLient.send('books.update', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.booksCLient.send('books.remove', id);
  }
}
