import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { BOOKS_PATTERN } from '../../../../libs/contracts/src/books/books.pattern';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOKS_PATTERN.CREATE)
  async create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern(BOOKS_PATTERN.GET_ALL)
  getAll() {
    return this.booksService.getAll();
  }

  @MessagePattern(BOOKS_PATTERN.GET_ONE)
  getOne(@Payload() id: number) {
    return this.booksService.getOne(id);
  }

  @MessagePattern(BOOKS_PATTERN.UPDATE)
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern(BOOKS_PATTERN.REMOVE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
