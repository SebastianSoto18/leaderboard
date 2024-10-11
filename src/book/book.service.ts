import { Injectable, NotFoundException } from '@nestjs/common';
import { Books } from './models/book.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

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
    
    async findById(bookId: number): Promise<Books>{
        return await this.bookRepository.findOneBy({
            BookId:bookId
        });
    }

    async updateBook(updateBook: Books): Promise<Books>{
        var book = await this.findById(updateBook.BookId);

        if(book == null){
            throw new NotFoundException();
        }

        Object.assign(book,updateBook);
        return await this.bookRepository.save(book);
    }

    async deleteBook(id: number): Promise<void>{
        var book = await this.findById(id);

        if(book == null){
            throw new NotFoundException();
        }

        await this.bookRepository.remove(book);
    }
}
