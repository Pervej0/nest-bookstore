import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      rating: 3.6,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      rating: 4.2,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.books.length + 1,
      ...createBookDto,
    };
    this.books.push(newBook);

    return this.books;
  }

  getAll() {
    return this.books;
  }

  getOne(id: number) {
    const filteredBook = this.books.find((book) => book.id === id);
    return filteredBook;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
