import { Injectable } from '@nestjs/common';
import { Book } from './Models/book.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Book) private bookRepository : Repository<Book> ) {}

    async findAll() :  Promise<Book[]> {
        return await this.bookRepository.find();
    }
}
