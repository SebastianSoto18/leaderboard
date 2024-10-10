import { Injectable } from '@nestjs/common';
import { Books } from './models/book.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Books) private bookRepository : Repository<Books> ) {}

    async findAll() :  Promise<Books[]> {
        return await this.bookRepository.find();
    }

    async create(book: Books): Promise<Books>{

        const obj = this.bookRepository.create(book);

        await this.bookRepository.save(obj);

        return obj;
    } 
}
