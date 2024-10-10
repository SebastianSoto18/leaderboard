import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Books } from './book/models/book.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    })
    ,TypeOrmModule.forRoot({
      type : 'sqlite',
      database : 'C:\\Users\\Juan\\Desktop\\historieta',
      logger : 'advanced-console',
      entities: [Books],
      synchronize: false,
    })
    ,BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
