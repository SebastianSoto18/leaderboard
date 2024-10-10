import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Books } from './models/book.model';
import { CreateBookDto } from './dtos/createBookDto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks(): Promise<Books[]>{
        return  await this.bookService.findAll();
    }

    @Post()
    async createBook(@Body() book : CreateBookDto): Promise<Books>{

        var newBook = new Books();
        newBook.Tittle = book.Tittle;
        newBook.Author = book.Author;
        newBook.Category = book.Category;
        newBook.Description = book.Description;
        newBook.Price = book.Price;
        return this.bookService.create(newBook);
    }
}
