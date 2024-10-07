import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schemas';
import mongoose from 'mongoose';

@Injectable()
export class BookService {

    constructor(@InjectModel(Book.name) private bookModel: mongoose.Model<Book> ) {}

    async findAll() :  Promise<Book[]> {
        return await this.bookModel.find();
    }
}
