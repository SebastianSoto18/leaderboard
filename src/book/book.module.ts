import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './Models/book.model';


@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
