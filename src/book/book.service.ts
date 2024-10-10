import { Injectable } from '@nestjs/common';
import { Books } from './Models/book.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Books) private bookRepository : Repository<Books> ) {}

    async findAll() :  Promise<Books[]> {
        var data = await this.bookRepository.find();
        console.log(data);
        return data;
    }
}
