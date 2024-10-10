import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Books } from './Models/book.model';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks(): Promise<Books[]>{
        var data = await this.bookService.findAll();
        console.table(data);
        return data;
    }
}
