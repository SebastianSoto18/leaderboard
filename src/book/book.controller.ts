import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Models/book.model';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks(): Promise<Book[]>{
        return await this.bookService.findAll();
    }
}
